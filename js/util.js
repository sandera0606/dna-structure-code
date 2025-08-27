export function extractKey(partName){
    let extractedLetters = partName.replace(/[^a-zA-Z]/g, '');
    if(extractedLetters == "ATpair" || extractedLetters == "TApair"){
        return "ATbp";
    }
    if(extractedLetters == "CGpair" || extractedLetters == "GCpair"){
        return "CGbp";
    }
    // otherwise, it should be deoxyribose or phosphate, which are the desired keys.
    return extractedLetters;
}

const colours = new Map([
    ["adenine", "#4FA100FF"],
    ["thymine", "#568DC2FF"],
    ["cytosine", "#7D65B1FF"],
    ["guanine", "#D1548DFF"],
    ["deoxyribose", "#006196FF"],
    ["phosphate", "#D56F05FF"]
])

const infos = new Map([
    ["phosphate",
        `<h1>Phosphate Group</h1>
        <p>This part connects the sugar molecules in the DNA backbone. It gives DNA its negative charge and helps form the “rail” of the ladder. It is connected to the deoxyribose sugar through a phosphodiester bond.</p>`
    ],
    ["deoxyribose",
        `<h1>Deoxyribose Sugar</h1>
        <p>A 5-carbon sugar that links each base to the backbone. The “deoxy” means it has one less oxygen atom than regular ribose (which is in RNA)!</p>`
    ],
    ["ATbp",
        `<h1>A-T Base Pair</h1>
        <p><span style="color:${colours.get("adenine")}">Adenine (A)</span> always pairs with <span style="color:${colours.get("thymine")}">thymine (T)</span>. They connect with <b>two</b> hydrogen bonds. This pairing helps DNA copy itself perfectly. Hydrogen bonds are formed through intermolecular forces, which are weaker than intramolecular forces. This helps DNA ‘unzip’ when replicating. The fewer hydrogen bonds there are, the stronger the bond is, so A-T-rich DNA is easier to ‘unzip’ than C-G-rich DNA.</p>
        <ul>Key point: <b>inter</b> indicates interactions between <b>different</b> molecules, and <b>intra</b> indicates interactions in the <b>same</b> molecule.</ul>`
    ],
    ["CGbp",
        `<h1>C-G Base Pair</h1>
        <p><span style="color:${colours.get("cytosine")}">Cytosine (C)</span> always pairs with <span style="color:${colours.get("guanine")}">guanine (G)</span>. They connect with <b>three</b> hydrogen bonds. This pairing helps DNA copy itself perfectly. Hydrogen bonds are formed through intermolecular forces, which are weaker than intramolecular forces. This helps DNA ‘unzip’ when replicating. The more hydrogen bonds there are, the stronger the bond is, so C-G-rich DNA is harder to ‘unzip’ than A-T rich DNA.</p>
        <ul>Key point: <b>inter</b> indicates interactions between <b>different</b> molecules, and <b>intra</b> indicates interactions in the <b>same</b> molecule.</ul>`
    ]
])

const images = new Map([
    ["ATbp", "./ATbp.png"],
    ["CGbp", "./CGbp.png"],
    ["deoxyribose", "./deoxyribose.png"],
    ["phosphate", "./phosphate.png"]
])

const homepage = [
    `<h1>Double Helix</h1>
    <h2>This is the DNA double helix.</h2>
    <p>It is made of two strands twisted around each other like a spiral ladder. Each “rung” is a pair of nitrogenous bases, and the “rails” are made of sugar and phosphate groups.</p>`,
    `<h1>Double Helix</h1>
    <h2>Directionality (5’ and 3’ Ends)</h2>
    <p>DNA has direction! Each strand runs in an opposite direction. One goes from 5’ to 3’, and the other from 3’ to 5’. This is important for DNA replication and for interaction with different enzymes. You can spot the 5’ end by finding the phosphate group on the end of a pentose sugar!</p>`,
    `<h1>Double Helix</h1>
    <h2>Major and Minor Grooves</h2>
    <p>As DNA twists, it forms two types of grooves: major and minor. These grooves are spots where proteins can bind to DNA, which is crucial for gene expression.</p>`
]

const defaultInfo = "Click on something to learn more."

const menuMap = new Map([
    ["aboutMe",
        `<h2>About Me</h2>
        <p> Hi, I'm Sandra! I'm currently a 2nd year CS student at UWaterloo (as of 2025), and this is my first time building a website EVER! I love biology (isn't it so cool how every living thing is made up of so many little things that just somehow... work?) and 3D modeling, and this was a fun project that helped me bring my interests together. Some irrelevant stuff about me: I love to rock climb and fold origami! </p>
        <p>Find me here:</p>
        <ul>
        <li><a href="https://www.linkedin.com/in/shuang0616/" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/sandera0606" target="_blank">GitHub</a></li>
        <li><a href="mailto:shuang2322@gmail.com">Email</a></li>
        </ul>`],
    ["motive",
        `<h2>Motive</h2>
        <h3>Why I made this Tool</h3>
        <p>When I first learned about DNA, I remember being really confused. Everything was taught to me using 2D diagrams, and then my teacher suddenly pulled up a 3D youtube video about DNA replication which didn’t resemble the 2D diagrams at all! I found the diagrams which show the molecular structure of DNA super difficult to understand and also overwhelming. Although I could understand the basics (DNA is made of base pairs, it carries genetic information, there are three components in a nucleotide), I couldn’t visualize the 3D form of DNA in my head (the only image I could conjure was a helical shape with ladder rings, which was <b>not</b> a picture that had the molecular structure in mind). I didn’t get how all the pieces of DNA worked together in 3D space, and how all those pieces somehow became a ribbon-like helical shape.</p>
        <h3>The Problem with Flat Diagrams</h3>
        <p>Most students are introduced to DNA through a series of 2D diagrams. These often break down the molecule into its parts (phosphate, sugar, base pairs) and show them separately. Sometimes they’re simplified for clarity, sometimes they’re drawn at odd angles to fit a page. While these diagrams can be useful, they require students to do a lot of mental work to imagine how everything fits together in real space. However, it's so important to understand DNA's structure, since its form is so specific to its function.</p>
        <h3>Building a Better Way to See DNA</h3>
        <p>I built this website because I wanted to bridge the gap between the 2D diagrams that we see and the 3D ladder-like structure of DNA that we know exists. I wanted to take those same concepts that students already learn (base pairing, backbone structure, helical shape), and present them in 3D, interactively, allowing students to explore DNA’s structure on their own.</p>
        <p>When you click on different parts of the molecules, short explanations pop up, helping you connect the visual with the concept. The blurbs are intended to be clear and straightforward.</p>
        <p>Thanks for taking the time to explore this project! I hope you find it useful, fun to explore, and that you’ve learned something new :-)</p>`],
    ["resources",
        `<h2>More Resources</h2>
        <p>Hello! Here are some cool resources that you can check out to learn more! Teachers, you can consider showing these in your classrooms :-)</p>
        <ul>
        <li><a href="https://proteopedia.org/wiki/index.php/DNA" target="_blank">DNA on Proteopedia</a> (another cool 3D representation of DNA)</li> 
        <li><a href="https://www.youtube.com/watch?v=JQByjprj_mA&t=54s" target="_blank">Amoeba Sisters: DNA vs RNA</a></li>
        <li><a href="https://www.youtube.com/watch?v=SeOrvA9ikW8&pp=ygUNbnVjbGVpYyBhY2lkcw%3D%3D" target="_blank">Visualizing Nucleic Acids</a></li>
        </ul>`],
    ["citations",
        `<h2>Citations</h2>
        <p>All images on this site were made by me. All information on this site was taken from the textbooks in the following citations.</p>
        
        <h3>Works Cited</h3>
        <ul>
        <li>Goldberg, M., & Fischer, J. (2023). <i>Genetics: From Genes to Genomes</i> (8th edition). McGraw Hill.</li>
        <li>Huang, Sandra. "AT Pair Molecule." <i>3D Structure of DNA</i>, July 2025, https://sandera0606.github.io/dna-structure.</li>
        <li>Huang, Sandra. "CG Pair Molecule." <i>3D Structure of DNA</i>, July 2025, https://sandera0606.github.io/dna-structure.</li>
        <li>Huang, Sandra. "Deoxyribose Molecule." <i>3D Structure of DNA</i>, July 2025, https://sandera0606.github.io/dna-structure.</li>
        <li>Huang, Sandra. "DNA Helix 3D Molecule." <i>3D Structure of DNA</i>, July 2025, https://sandera0606.github.io/dna-structure.</li>
        <li>Huang, Sandra. "Phosphate Molecule." <i>3D Structure of DNA</i>, July 2025, https://sandera0606.github.io/dna-structure.</li>
        <li>Morris, James, et al. <i>Biology: How Life Works</i>. 5th ed., Macmillan Learning, 2023.</li>
        </ul>`]
])

export {infos, images, homepage, defaultInfo, menuMap}