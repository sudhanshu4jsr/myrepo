# node-gst
Nodejs based app which uses gstreamer and ffmpeg

## How to run
```
npm install
node app.js
```
On succesful run, it will create an mp4 named dump.mp4 inside ther base dir and performs ffprobe on that file

## Dependencies
This needs full installation of gstreamer and ffmpeg. They can be installed via
```
sudo apt install ffmpeg
sudo apt install gstreamer1.0-tools gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav
```
