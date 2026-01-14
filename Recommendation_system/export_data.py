import pickle
import json
import pandas as pd
import os

def load_data():
    print("Loading pickle files...")
    
    try:
        with open('movies_dict.pkl', 'rb') as f:
            movies_dict = pickle.load(f)
            
        with open('similarity.pkl', 'rb') as f:
            similarity = pickle.load(f)
            
        # Handle if movies_dict is a DataFrame or a dict
        if isinstance(movies_dict, pd.DataFrame):
            movies = movies_dict
        else:
            movies = pd.DataFrame(movies_dict)

        print(f"Loaded {len(movies)} movies.")
        return movies, similarity
    except Exception as e:
        print(f"Error loading files: {e}")
        return None, None

def generate_recommendations(movies, similarity):
    recommendations = {}
    
    print("Generating recommendations...")
    
    # Ensure 'title' column exists
    if 'title' not in movies.columns:
        # Try finding a column that looks like a title
        possible_cols = [c for c in movies.columns if 'title' in c.lower()]
        if possible_cols:
            movies.rename(columns={possible_cols[0]: 'title'}, inplace=True)
        else:
            print("Error: Could not find 'title' column in movies data.")
            print(f"Available columns: {movies.columns}")
            return {}

    for index, row in movies.iterrows():
        movie_title = row['title']
        
        # Determine the index for the similarity matrix
        # If the index is not integer-based or doesn't match the similarity matrix shape, we might need adjustment.
        # Assuming the DataFrame index corresponds to the similarity matrix index.
        
        try:
            distances = similarity[index]
            movies_list = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:6]
            
            recommended_movies = []
            for i in movies_list:
                recommended_movies.append(movies.iloc[i[0]].title)
                
            recommendations[movie_title] = recommended_movies
        except Exception as e:
            print(f"Skipping {movie_title} due to error: {e}")
            continue
            
    return recommendations

def save_to_json(data):
    output_path = os.path.join('src', 'recommendations.json')
    print(f"Saving to {output_path}...")
    
    with open(output_path, 'w') as f:
        json.dump(data, f, indent=2)
        
    print("Done! You can now use recommendations.json in your React app.")

if __name__ == "__main__":
    movies, similarity = load_data()
    if movies is not None:
        rec_data = generate_recommendations(movies, similarity)
        if rec_data:
            save_to_json(rec_data)
