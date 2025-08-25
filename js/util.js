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

export {infos, images}