for f in *.mp4; do
    ffmpeg -i "$f" -c:v libvpx-vp9 -b:v 1M -c:a libopus "${f%.mp4}.webm"
done

