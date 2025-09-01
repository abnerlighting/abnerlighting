#!/bin/bash

# Copy diagram files to their respective folders as 3.png
# Only for existing folders

# Source directory where the diagram images are located
SOURCE_DIR="/Volumes/offload/diagram"

# Destination base directory
DEST_BASE="public/assets/products/concrete-series"

echo "Starting to copy diagram files to existing folders as 3.png..."

# Function to copy diagram file if it exists
copy_diagram_file() {
    local diagram_file="$1"
    local dest_folder="$2"
    
    if [[ -f "$diagram_file" && -d "$dest_folder" ]]; then
        cp "$diagram_file" "$dest_folder/3.png"
        echo "Copied $(basename "$diagram_file") to $dest_folder/3.png"
    else
        if [[ ! -f "$diagram_file" ]]; then
            echo "Warning: Diagram file not found: $diagram_file"
        fi
        if [[ ! -d "$dest_folder" ]]; then
            echo "Warning: Destination folder not found: $dest_folder"
        fi
    fi
}

# Wall Lights
echo "Processing Wall Lights..."
copy_diagram_file "$SOURCE_DIR/Benin-D.png" "$DEST_BASE/wall_lights/benin-d"
copy_diagram_file "$SOURCE_DIR/Benin-UD.png" "$DEST_BASE/wall_lights/benin-ud"
copy_diagram_file "$SOURCE_DIR/Berlin-D.png" "$DEST_BASE/wall_lights/berlin-d"
copy_diagram_file "$SOURCE_DIR/Berlin-UD.png" "$DEST_BASE/wall_lights/berlin-ud"
copy_diagram_file "$SOURCE_DIR/Blanca.png" "$DEST_BASE/wall_lights/blanca"
copy_diagram_file "$SOURCE_DIR/Cairo-UD.png" "$DEST_BASE/wall_lights/cairo"
copy_diagram_file "$SOURCE_DIR/Casa.png" "$DEST_BASE/wall_lights/casa"
copy_diagram_file "$SOURCE_DIR/Circo-L.png" "$DEST_BASE/wall_lights/circo-l"
copy_diagram_file "$SOURCE_DIR/Circo-S.png" "$DEST_BASE/wall_lights/circo-s"
copy_diagram_file "$SOURCE_DIR/Curvy-UD.png" "$DEST_BASE/wall_lights/curvy_ud"
copy_diagram_file "$SOURCE_DIR/Disc-L.png" "$DEST_BASE/wall_lights/disc-l"
copy_diagram_file "$SOURCE_DIR/Disc-S.png" "$DEST_BASE/wall_lights/disc-s"
copy_diagram_file "$SOURCE_DIR/Dublin-L.png" "$DEST_BASE/wall_lights/dublin-l"
copy_diagram_file "$SOURCE_DIR/Dublin-S.png" "$DEST_BASE/wall_lights/dublin-s"
copy_diagram_file "$SOURCE_DIR/Durban-L.png" "$DEST_BASE/wall_lights/durban-l"
copy_diagram_file "$SOURCE_DIR/Durban-S.png" "$DEST_BASE/wall_lights/durban-s"
copy_diagram_file "$SOURCE_DIR/Giza-L.png" "$DEST_BASE/wall_lights/giza-l"
copy_diagram_file "$SOURCE_DIR/Giza-S.png" "$DEST_BASE/wall_lights/giza-s"
copy_diagram_file "$SOURCE_DIR/Jumo.png" "$DEST_BASE/wall_lights/jumo"
copy_diagram_file "$SOURCE_DIR/Kawa.png" "$DEST_BASE/wall_lights/kawa"
copy_diagram_file "$SOURCE_DIR/Kyoto-L.png" "$DEST_BASE/wall_lights/kyoto-l"
copy_diagram_file "$SOURCE_DIR/Kyoto-S.png" "$DEST_BASE/wall_lights/kyoto-s"
copy_diagram_file "$SOURCE_DIR/La Paz-L.png" "$DEST_BASE/wall_lights/la-paz-l"
copy_diagram_file "$SOURCE_DIR/La Paz-S.png" "$DEST_BASE/wall_lights/la-paz-s"
copy_diagram_file "$SOURCE_DIR/Lagos-L.png" "$DEST_BASE/wall_lights/lagos-l"
copy_diagram_file "$SOURCE_DIR/Lagos-S.png" "$DEST_BASE/wall_lights/lagos-s"
copy_diagram_file "$SOURCE_DIR/Leon-L.png" "$DEST_BASE/wall_lights/leon-l"
copy_diagram_file "$SOURCE_DIR/Leon-S.png" "$DEST_BASE/wall_lights/leon-s"
copy_diagram_file "$SOURCE_DIR/Lima-L.png" "$DEST_BASE/wall_lights/lima-l"
copy_diagram_file "$SOURCE_DIR/Lima-S.png" "$DEST_BASE/wall_lights/lima-s"
copy_diagram_file "$SOURCE_DIR/Medan-L.png" "$DEST_BASE/wall_lights/medan-l"
copy_diagram_file "$SOURCE_DIR/Medan-S.png" "$DEST_BASE/wall_lights/medan-s"
copy_diagram_file "$SOURCE_DIR/Mushroom-L.png" "$DEST_BASE/wall_lights/mushroom-l"
copy_diagram_file "$SOURCE_DIR/Mushroom S.png" "$DEST_BASE/wall_lights/mushroom-s"
copy_diagram_file "$SOURCE_DIR/Napoli-L.png" "$DEST_BASE/wall_lights/napoli-l"
copy_diagram_file "$SOURCE_DIR/Napoli-S.png" "$DEST_BASE/wall_lights/napoli-s"
copy_diagram_file "$SOURCE_DIR/Osaka.png" "$DEST_BASE/wall_lights/osaka"
copy_diagram_file "$SOURCE_DIR/Paris-L.png" "$DEST_BASE/wall_lights/paris-l"
copy_diagram_file "$SOURCE_DIR/Paris-S.png" "$DEST_BASE/wall_lights/paris-s"
copy_diagram_file "$SOURCE_DIR/Perth-L.png" "$DEST_BASE/wall_lights/perth-l"
copy_diagram_file "$SOURCE_DIR/Perth-M.png" "$DEST_BASE/wall_lights/perth-m"
copy_diagram_file "$SOURCE_DIR/Perth-S.png" "$DEST_BASE/wall_lights/perth-s"
copy_diagram_file "$SOURCE_DIR/Phoenix-L.png" "$DEST_BASE/wall_lights/phoenix-l"
copy_diagram_file "$SOURCE_DIR/Phoenix-S.png" "$DEST_BASE/wall_lights/phoenix-s"
copy_diagram_file "$SOURCE_DIR/Rabat-L.png" "$DEST_BASE/wall_lights/rabat-l"
copy_diagram_file "$SOURCE_DIR/Rabat-S.png" "$DEST_BASE/wall_lights/rabat-s"
copy_diagram_file "$SOURCE_DIR/Rome-A.png" "$DEST_BASE/wall_lights/rome-a"
copy_diagram_file "$SOURCE_DIR/Rome-B.png" "$DEST_BASE/wall_lights/rome-b"
copy_diagram_file "$SOURCE_DIR/Rome-C.png" "$DEST_BASE/wall_lights/rome-c"
copy_diagram_file "$SOURCE_DIR/Saki.png" "$DEST_BASE/wall_lights/saki"
copy_diagram_file "$SOURCE_DIR/Samara.png" "$DEST_BASE/wall_lights/samara"
copy_diagram_file "$SOURCE_DIR/Sana-L.png" "$DEST_BASE/wall_lights/sana-l"
copy_diagram_file "$SOURCE_DIR/Sana-S.png" "$DEST_BASE/wall_lights/sana-s"
copy_diagram_file "$SOURCE_DIR/Seoul-L.png" "$DEST_BASE/wall_lights/seoul-l"
copy_diagram_file "$SOURCE_DIR/Seoul-S.png" "$DEST_BASE/wall_lights/seoul-s"
copy_diagram_file "$SOURCE_DIR/Squad-L.png" "$DEST_BASE/wall_lights/squad-l"
copy_diagram_file "$SOURCE_DIR/Squad-S.png" "$DEST_BASE/wall_lights/squad-s"
copy_diagram_file "$SOURCE_DIR/Squid-A.png" "$DEST_BASE/wall_lights/squid-a"
copy_diagram_file "$SOURCE_DIR/Squid-B.png" "$DEST_BASE/wall_lights/squid-b"
copy_diagram_file "$SOURCE_DIR/Squid-C.png" "$DEST_BASE/wall_lights/squid-c"
copy_diagram_file "$SOURCE_DIR/Sumo.png" "$DEST_BASE/wall_lights/sumo"
copy_diagram_file "$SOURCE_DIR/Tokyo-L.png" "$DEST_BASE/wall_lights/tokyo-l"
copy_diagram_file "$SOURCE_DIR/Tokyo-S.png" "$DEST_BASE/wall_lights/tokyo-s"
copy_diagram_file "$SOURCE_DIR/Veno UD.png" "$DEST_BASE/wall_lights/veno_ud"

# Floor Lights
echo "Processing Floor Lights..."
copy_diagram_file "$SOURCE_DIR/Jumo.png" "$DEST_BASE/floor_lights/jumo"
copy_diagram_file "$SOURCE_DIR/Kawa.png" "$DEST_BASE/floor_lights/kawa"
copy_diagram_file "$SOURCE_DIR/Osaka.png" "$DEST_BASE/floor_lights/osaka"
copy_diagram_file "$SOURCE_DIR/Saki.png" "$DEST_BASE/floor_lights/saki"
copy_diagram_file "$SOURCE_DIR/Sumo.png" "$DEST_BASE/floor_lights/sumo"

# Path Lights
echo "Processing Path Lights..."
copy_diagram_file "$SOURCE_DIR/Dublin-L.png" "$DEST_BASE/path_lights/dublin-l"
copy_diagram_file "$SOURCE_DIR/Dublin-S.png" "$DEST_BASE/path_lights/dublin-s"
copy_diagram_file "$SOURCE_DIR/Kyoto-L.png" "$DEST_BASE/path_lights/kyoto-l"
copy_diagram_file "$SOURCE_DIR/Kyoto-S.png" "$DEST_BASE/path_lights/kyoto-s"
copy_diagram_file "$SOURCE_DIR/Leon-L.png" "$DEST_BASE/path_lights/leon-l"
copy_diagram_file "$SOURCE_DIR/Leon-S.png" "$DEST_BASE/path_lights/leon-s"
copy_diagram_file "$SOURCE_DIR/Mushroom-L.png" "$DEST_BASE/path_lights/mushroom-l"
copy_diagram_file "$SOURCE_DIR/Mushroom S.png" "$DEST_BASE/path_lights/mushroom-s"
copy_diagram_file "$SOURCE_DIR/Paris-L.png" "$DEST_BASE/path_lights/paris-l"
copy_diagram_file "$SOURCE_DIR/Paris-S.png" "$DEST_BASE/path_lights/paris-s"
copy_diagram_file "$SOURCE_DIR/Tokyo-L.png" "$DEST_BASE/path_lights/tokyo-l"
copy_diagram_file "$SOURCE_DIR/Tokyo-M.png" "$DEST_BASE/path_lights/tokyo-m"
copy_diagram_file "$SOURCE_DIR/Tokyo-S.png" "$DEST_BASE/path_lights/tokyo-s"

# Step Lights
echo "Processing Step Lights..."
copy_diagram_file "$SOURCE_DIR/Squid-A.png" "$DEST_BASE/step_lights/squid_a"
copy_diagram_file "$SOURCE_DIR/Squid-B.png" "$DEST_BASE/step_lights/squid_b"
copy_diagram_file "$SOURCE_DIR/Squid-C.png" "$DEST_BASE/step_lights/squid_c"

echo "Diagram files copy process completed!"
