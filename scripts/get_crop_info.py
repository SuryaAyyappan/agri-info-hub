import sys
import json
import os

def get_crop_info(crop_id):
    """Get information about a specific crop based on its ID."""
    try:
        crop_id = int(crop_id)
        
        # Map crop ID to file name
        crop_files = {
            1: "rice.txt",
            2: "wheat.txt",
            3: "bajra.txt",
            4: "jowar.txt",
            # Add mappings for all crops
        }
        
        if crop_id not in crop_files:
            return {
                "name": f"Crop {crop_id}",
                "scientificName": "Information not available",
                "growingSeason": "Information not available",
                "waterRequirements": "Information not available",
                "soilRequirements": "Information not available"
            }
        
        # In a real application, you would read from your text files
        # For now, return dummy data
        crop_data = {
            1: {
                "name": "Rice",
                "scientificName": "Oryza sativa",
                "growingSeason": "Kharif (June-July to October-November)",
                "waterRequirements": "High water requirements, 1200-1800 mm",
                "soilRequirements": "Clay or clay loam soils with good water retention capacity",
                "fertilizers": "NPK 120:60:60 kg/ha",
                "pests": "Stem borer, brown plant hopper, leaf folder",
                "diseases": "Blast, bacterial leaf blight, sheath blight",
                "harvestTime": "115-120 days after planting",
                "yield": "3-5 tons/ha under normal conditions",
                "tips": "Proper water management during critical growth stages improves yield"
            },
            2: {
                "name": "Wheat",
                "scientificName": "Triticum aestivum",
                "growingSeason": "Rabi (October-November to March-April)",
                "waterRequirements": "Medium water requirements, 450-650 mm",
                "soilRequirements": "Loam or clay loam soils with good drainage",
                "fertilizers": "NPK 120:60:40 kg/ha",
                "pests": "Aphids, termites, pink stem borer",
                "diseases": "Rust, loose smut, powdery mildew",
                "harvestTime": "110-120 days after sowing",
                "yield": "3-4.5 tons/ha under normal conditions",
                "tips": "Timely sowing and adequate irrigation at crown root initiation, flowering and grain filling stages"
            }
        }
        
        return crop_data.get(crop_id, {
            "name": f"Crop {crop_id}",
            "scientificName": "Information not available",
            "growingSeason": "Information not available",
            "waterRequirements": "Information not available",
            "soilRequirements": "Information not available"
        })
        
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    if len(sys.argv) > 1:
        crop_id = sys.argv[1]
        result = get_crop_info(crop_id)
        print(json.dumps(result))
    else:
        print(json.dumps({"error": "No crop ID provided"})) 