import json
import os
import glob
from pathlib import Path

# init vars
filename = ''
foldername = ''
tags = ''
all_songs = {}

fields =['title', 'album', 'lyrics', 'tags']

tracks_folder = os.path.dirname(os.getcwd()) + '/tracks'

all_txt = list(Path(tracks_folder).glob('**/*.txt'))

i=0
for track in all_txt:
    song = {}

    track_title = track.name.replace(".txt", "")
    track_album = track.parent.name

    
    file = open(track, mode='r')
    track_lyrics = file.read()

    song[fields[0]] = track_title
    song[fields[1]] = track_album
    song[fields[2]] = track_lyrics
    song[fields[3]] = tags

    all_songs[i] = song

    file.close()

    i += 1

# creating json file         
out_file = open("converted.json", "w") 
json.dump(all_songs, out_file, indent = 4) 
out_file.close() 