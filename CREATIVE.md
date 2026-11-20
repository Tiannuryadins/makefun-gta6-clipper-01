# Creative decision — gta6-clipper-01

Decided by the agent in the recorded build session (20 Nov 2026, after the
bounty opened 08:00 WIB). The transcripts of that session show the moment
being chosen, this creative being decided, and the clip being cut and
rendered with ffmpeg.

## The moment

Lucia's store robbery and walk-out in the opening hour of Rockstar's Grand
Theft Auto VI (released 19 Nov 2026): she announces the stick-up, takes the
cash at the counter, fights off the clerk who grabs her, and walks out with
the duffel bag as a cop approaches.

Source: "GTA 6 Gameplay Walkthrough Part 1 FULL GAME [4K PS5 PRO] - No
Commentary" by MKIceAndFire on YouTube
(https://www.youtube.com/watch?v=YDNs_sPEcJc) — the most-watched GTA 6
gameplay on YouTube at build time (7.4M views), no commentary, clean game
audio. Cut from walkthrough time 11:28–12:18 (local 208–258s of the
downloaded 08:00–13:00 section). The agent fetched the source footage in
the session and cut the clip from it; the clip itself was rendered here,
not downloaded finished.

Why this moment will hold a viewer: it opens mid-action — the gun is
already out and Lucia is announcing the robbery in the first second, so
there is no slow build for a viewer to swipe past. It is the first playable
crime of the most anticipated game of the decade, on launch week, when
everyone is searching for exactly this. And it is one complete arc in 50
seconds: announce, rob, fight, walk out — no credits, no talking heads, no
montage.

## The hook

First frame: the gun already out, Lucia mid-sentence ("Heads up, this is a
fuckin' stick up"). On-screen hook text for the first 3.5 seconds, top of
frame: "GTA 6 IS HERE".

## The pitch (in the clip itself)

Over the final 8 seconds (t=42–50), while Lucia walks out with the bag,
three lines of on-screen text in the vertical safe area (upper-middle,
clear of YouTube's buttons and the burned-in subtitles at the bottom):

    Make clips like this with AI
    and earn money on make.fun
    make.fun/bounty/gta6-clipper-01

Text-only pitch (no voiceover): the rules allow text on screen, a voice,
or both. The clip's original game audio (dialogue + street ambience) runs
throughout; no music was added.

## The cut

- Trim: 50 seconds, one continuous moment (no montage, no jump cuts).
- Crop: 1920x1080 source center-cropped to vertical 9:16 (608x1080 window,
  scaled to 1080x1920). The center crop also drops the source walkthrough's
  bottom-right watermark out of frame.
- Encode: H.264, CRF 20, 60 fps, AAC 128k, faststart. Under 60 seconds, so
  YouTube treats it as a Short.
- Render command (run in the session; see the build transcript):

    ffmpeg -ss 208 -t 50 -i mkice-part1-gameplay.mp4 \
      -vf "crop=608:1080:(in_w-608)/2:0,scale=1080:1920,setsar=1,drawtext=... (hook + pitch)" \
      -c:v libx264 -preset medium -crf 20 -r 60 -c:a aac -b:a 128k \
      -movflags +faststart gta6-clipper-01-clip.mp4

## Upload

Title: Lucia Robs Her First Store in GTA 6

Description (the bounty's line, word for word, plus the play code):

    Made by my AI agent for a $500 bounty on make.fun, where you can earn
    money making clips with AI: https://make.fun/bounty/gta6-clipper-01

    makefun-sail-daisy-patio

    #GTA6 #GTAVI #Shorts #ViceCity

Public Short, published in the bounty window (20 Nov 08:00 WIB – 23 Nov
08:00 WIB), kept public until the results are out.
