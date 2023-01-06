import pandas as pd
import json

# Read excel document
excel_data_df = pd.read_excel(io="datos.xlsx", sheet_name='Productos')

# Convert excel to string 
# (define orientation of document in this case from up to down)
datosJson = excel_data_df.to_json(orient='records')

# Make the string into a list to be able to input in to a JSON-file
json_dict = json.loads(datosJson)

# Define file to write to and 'w' for write option -> json.dump() 
# defining the list to write from and file to write to
with open('productos.json', 'w') as json_file:
    json.dump(json_dict, json_file)


# Read excel document
excel_data_df = pd.read_excel(io="datos.xlsx", sheet_name='Servicios')

# Convert excel to string 
# (define orientation of document in this case from up to down)
datosJson = excel_data_df.to_json(orient='records')

# Make the string into a list to be able to input in to a JSON-file
json_dict = json.loads(datosJson)

# Define file to write to and 'w' for write option -> json.dump() 
# defining the list to write from and file to write to
with open('servicios.json', 'w') as json_file:
    json.dump(json_dict, json_file)