#!/bin/bash

# Copy Architectural Series files to their respective folders
# Convert naming conventions and organize properly

# Source directory where the architectural images are located
SOURCE_DIR="/Volumes/offload/Architectural"

# Destination base directory
DEST_BASE="public/assets/products/architectural-series"

echo "Starting to copy Architectural Series files..."

# Function to copy file with proper naming
copy_architectural_file() {
    local source_file="$1"
    local dest_folder="$2"
    local dest_filename="$3"
    
    if [[ -f "$source_file" ]]; then
        # Create destination directory if it doesn't exist
        mkdir -p "$dest_folder"
        
        # Copy file with new name
        cp "$source_file" "$dest_folder/$dest_filename"
        echo "Copied $(basename "$source_file") to $dest_folder/$dest_filename"
    else
        echo "Warning: Source file not found: $source_file"
    fi
}

# Play-50 Series
echo "Processing Play-50 Series..."
copy_architectural_file "$SOURCE_DIR/Play-50/halo 50.jpg" "$DEST_BASE/play-50" "halo-50.jpg"
copy_architectural_file "$SOURCE_DIR/Play-50/invi 50 adj.jpg" "$DEST_BASE/play-50" "invi-50-adj.jpg"
copy_architectural_file "$SOURCE_DIR/Play-50/invi 50 fx.jpg" "$DEST_BASE/play-50" "invi-50-fx.jpg"
copy_architectural_file "$SOURCE_DIR/Play-50/invi 50 pin.jpg" "$DEST_BASE/play-50" "invi-50-pin.jpg"
copy_architectural_file "$SOURCE_DIR/Play-50/invi 50 ww.jpg" "$DEST_BASE/play-50" "invi-50-ww.jpg"
copy_architectural_file "$SOURCE_DIR/Play-50/play-50 ring trim.jpg" "$DEST_BASE/play-50" "play-50-ring-trim.jpg"
copy_architectural_file "$SOURCE_DIR/Play-50/play-50 ring trimless.jpg" "$DEST_BASE/play-50" "play-50-ring-trimless.jpg"
copy_architectural_file "$SOURCE_DIR/Play-50/Sleek 50.jpg" "$DEST_BASE/play-50" "sleek-50.jpg"

# Play-70 Series
echo "Processing Play-70 Series..."
copy_architectural_file "$SOURCE_DIR/Play-70/Halo 70.jpg" "$DEST_BASE/play-70" "halo-70.jpg"
copy_architectural_file "$SOURCE_DIR/Play-70/Invi 70 Adj.jpg" "$DEST_BASE/play-70" "invi-70-adj.jpg"
copy_architectural_file "$SOURCE_DIR/Play-70/Invi 70 Fx.jpg" "$DEST_BASE/play-70" "invi-70-fx.jpg"
copy_architectural_file "$SOURCE_DIR/Play-70/Invi 70 WW.jpg" "$DEST_BASE/play-70" "invi-70-ww.jpg"
copy_architectural_file "$SOURCE_DIR/Play-70/Play-70 Trim Ring.jpg" "$DEST_BASE/play-70" "play-70-trim-ring.jpg"
copy_architectural_file "$SOURCE_DIR/Play-70/Play-70 Trimless Ring.jpg" "$DEST_BASE/play-70" "play-70-trimless-ring.jpg"
copy_architectural_file "$SOURCE_DIR/Play-70/Sleek 70.jpg" "$DEST_BASE/play-70" "sleek-70.jpg"

# Play-Me Series
echo "Processing Play-Me Series..."
copy_architectural_file "$SOURCE_DIR/Play-Me/Play-me semi recessed.jpg" "$DEST_BASE/play-me" "play-me-semi-recessed.jpg"
copy_architectural_file "$SOURCE_DIR/Play-Me/Play-me surface.jpg" "$DEST_BASE/play-me" "play-me-surface.jpg"
copy_architectural_file "$SOURCE_DIR/Play-Me/Play-me trim.jpg" "$DEST_BASE/play-me" "play-me-trim.jpg"
copy_architectural_file "$SOURCE_DIR/Play-Me/Play-me trimless.jpg" "$DEST_BASE/play-me" "play-me-trimless.jpg"

# Mini Play Series
echo "Processing Mini Play Series..."
copy_architectural_file "$SOURCE_DIR/Mini Play Series/MP-10.jpg" "$DEST_BASE/mini-play-series" "mp-10.jpg"
copy_architectural_file "$SOURCE_DIR/Mini Play Series/MP-5.jpg" "$DEST_BASE/mini-play-series" "mp-5.jpg"
copy_architectural_file "$SOURCE_DIR/Mini Play Series/MP-7.jpg" "$DEST_BASE/mini-play-series" "mp-7.jpg"
copy_architectural_file "$SOURCE_DIR/Mini Play Series/MP-8.jpg" "$DEST_BASE/mini-play-series" "mp-8.jpg"
copy_architectural_file "$SOURCE_DIR/Mini Play Series/MP-9.jpg" "$DEST_BASE/mini-play-series" "mp-9.jpg"

# Play Series
echo "Processing Play Series..."
copy_architectural_file "$SOURCE_DIR/Play series/P-10.jpg" "$DEST_BASE/play-series" "p-10.jpg"
copy_architectural_file "$SOURCE_DIR/Play series/P-19 Mini.jpg" "$DEST_BASE/play-series" "p-19-mini.jpg"
copy_architectural_file "$SOURCE_DIR/Play series/P-19.jpg" "$DEST_BASE/play-series" "p-19.jpg"
copy_architectural_file "$SOURCE_DIR/Play series/P-20.jpg" "$DEST_BASE/play-series" "p-20.jpg"
copy_architectural_file "$SOURCE_DIR/Play series/P-9.jpg" "$DEST_BASE/play-series" "p-9.jpg"

# Surfy & Kone Series
echo "Processing Surfy & Kone Series..."
copy_architectural_file "$SOURCE_DIR/Surfy & Kone/kone.jpg" "$DEST_BASE/surfy-kone" "kone.jpg"
copy_architectural_file "$SOURCE_DIR/Surfy & Kone/Surfy-10.jpg" "$DEST_BASE/surfy-kone" "surfy-10.jpg"
copy_architectural_file "$SOURCE_DIR/Surfy & Kone/Surfy-15.jpg" "$DEST_BASE/surfy-kone" "surfy-15.jpg"
copy_architectural_file "$SOURCE_DIR/Surfy & Kone/Surfy-20.jpg" "$DEST_BASE/surfy-kone" "surfy-20.jpg"

echo "Architectural Series copy process completed!"
