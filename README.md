# The Structure of DNA
## Intro
Hello! This is a website I made for students who struggle to conceptualize the 3D structure of DNA. You can navigate the DNA model in 3D space and click on anything that interests you. When you click on different parts of the DNA, you can read about how that part fits into the overall structure! Have fun!
## URL
https://sandera0606.github.io/dna-structure
## Purpose
When I was taking high school biology, I found it difficult to map the 2D diagrams that teachers showed us into 3D space. It took an unreasonable amount of time for me to just understand what the 2D diagrams were trying to display; most 2D diagrams are not intuitive and are confusing!

I hope that this interactive website will help fill some gaps in understanding the 3D structure of DNA. I tried to make the structure match the 2D diagrams that teachers usually show in class, and I tried to make the explanations as comprehensive as possible, too! I hope you find this tool helpful :-)
## Tools
I used Blender3D to model the DNA helix, and I used three.js to display the 3D graphics. I used HTML and JavaScript to make the website and program the logic.
## Author
I’m a computer science student at the University of Waterloo (class of 2029), and I’m interested in genetics, medical care, and 3D modeling! I wanted to build something that is useful to people and also makes use of my interests. 

I got into 3D modeling around 2020, but I’ve only really messed around with it to make some static art projects. I’ve always wanted to post some of my work in an interactive format, and this was the perfect opportunity!

Some of my other interests include: bouldering, playing electric bass, origami, going to the gym (but I always skip leg day…)
## Research and Sources
How do I know this tool will be effective? I don’t, not really. Maybe it won't be. But I did some research which suggests that it'll be helpful, and I'm hoping it will be!
- A study from the team at ExploreLearning (the people who developed Gizmos) found that students who use interactive visual tools like 3D models score 39 percentile points higher on average than those who don’t (find the study [here](https://gizmos.explorelearning.com/user_area/content_media/raw/why-gizmos-work-research-paper.pdf)).
- Students have trouble translating 2D diagrams into 3D mental images (Find two studies [here](https://core.ac.uk/download/639103617.pdf) and [here](https://pubmed.ncbi.nlm.nih.gov/30897273/)). One recent study found that relying only on 2D diagrams leads to misconceptions and confusion. This tool can get rid of those misunderstandings; instead of asking students to imagine how the DNA double helix twists, they can see it right in front of them and explore it hands-on. 
- Students care about visuals. One study (from Frontiers in Psychology) shows that people subconsciously value things more when they look good (find it [here](https://doi.org/10.3389/fpsyg.2021.670800)!). I hope this website looks cool enough to subconsciously be valued highly.


The facts used in the website can be found in the following resources:
- McGrawHill’s Genetics: From genes to genomes (8th ed)
- Macmillan Learning’s Biology: How Life Works (2023; 5th edition)

## A bit more about the process (for those interested)
### Modelling
I wanted to make the 3D model match as closely as possible to the actual structure of DNA, but I also wanted to include all of the chemical information. I referenced [this](https://sketchfab.com/3d-models/dna-double-helix-a908bbcd3eb04372b83b352e71b55836) model by digfigue2 on sketchfab to make sure everything fit together properly in 3D space. Having to account for different angles was the most challenging part of this. It was difficult to make sure everything lined up while properly imitating the 2D diagrams that students may see in classrooms, while also properly imitating the real, 3D structure of DNA.
I used the grease pencil tool to draw the individual components of DNA, and I used array modifiers to give the DNA backbone its twist. I wanted to try using array modifiers and particle systems to put the nitrogenous base pairs in the helix, but that proved to be difficult. Instead, I manually placed each nitrogenous base in their positions.

Another major challenge I ran into was with exporting. Blender’s Grease Pencil doesn’t export properly in the .glb format I needed, so I had to go back and convert all my drawings into meshes. This meant redoing some bad topology that came out of the conversion process, which was a ton of extra work.

### Designing
I do not have a natural eye for design. I decided to make the design a little bit like a 3D notebook, and I actually had my own notebooks in mind while designing this website. I can only hope that it is intuitive to navigate and visually pleasing. 

### Programming
Programming is hard. This was my first time actually making something with HTML, CSS, and JavaScript, and I found myself on w3schools a lot (which means I also learned many new skills!). It was also super mega duper confusing to figure out three.js and to navigate building and deploying the website. Thankfully, we made it through!
