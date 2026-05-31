import d6cortImage from "../assets/general/d6cort.jpg";
import vigren100Image from "../assets/general/VIG100.jpg";

import atroShineImage from "../assets/dermat/shine.jpg";
import itrobid100Image from "../assets/dermat/IT100.jpg";
import itrobid200Image from "../assets/dermat/IT200.jpg";
import ketrixImage from "../assets/dermat/KETRIX.jpg";
import lulicoreImage from "../assets/dermat/lulicore.jpg";
import pichglowImage from "../assets/dermat/PICH.jpg";
import sundekImage from "../assets/dermat/SUN.jpg";

import atroD3CapImage from "../assets/wellness/d3_cap.jpg";
import atroD3DropImage from "../assets/wellness/d3_drop.jpg";
import atroD3NanoShotImage from "../assets/wellness/d3_n.s..jpg";
import atrovitEImage from "../assets/wellness/atE.jpg";
import cobalaxImage from "../assets/wellness/B12.jpg";
import hemoQSyrupImage from "../assets/wellness/HEMO_Q.jpg";
import hemoQTabImage from "../assets/wellness/HEMTAB.jpg";
import k2NovaImage from "../assets/wellness/K2nova.jpg";
import kayaKetanImage from "../assets/wellness/KAYA.jpg";
import laxsilImage from "../assets/wellness/LAXSIL.jpg";
import pOneImage from "../assets/wellness/PONE.jpg";
import ultracalImage from "../assets/wellness/CAL.jpg";
import zaroxyImage from "../assets/wellness/ZAR.jpg";

import appetyImage from "../assets/gastro/appt.jpg";
import atZoImage from "../assets/gastro/AT-ZO.jpg";
import atropraz40Image from "../assets/gastro/at40.jpg";
import atroprazDsrImage from "../assets/gastro/ATDSR.jpg";
import liverFreshImage from "../assets/gastro/LIVER.jpg";
import magicLlpImage from "../assets/gastro/LLP.jpg";
import rabazepDsrImage from "../assets/gastro/RAB.jpg";
import zyraftImage from "../assets/gastro/ZYRAFT.jpg";

import kt10Image from "../assets/pain/10_DT.jpg";
import movexaImage from "../assets/pain/MOVE.jpg";
import atromolMrImage from "../assets/pain/mr.jpg";
import atromolPImage from "../assets/pain/p.jpg";
import atromolSpImage from "../assets/pain/sp.jpg";

import metro10Image from "../assets/resp/MET10.jpg";
import metroLcTabImage from "../assets/resp/METLC.jpg";
import metroLcSyrupImage from "../assets/resp/METSYP.jpg";
import relicoffDmImage from "../assets/resp/RELDM.jpg";
import relicoffLsImage from "../assets/resp/RELLS.jpg";

export const productCategories = [
  {
    id: 1,
    title: "Dermatology",
    slug: "dermatology",
    description: "Skin-focused formulations for daily care and treatment needs.",
  },
  {
    id: 2,
    title: "General Medicines",
    slug: "general-medicines",
    description: "Reliable medicines across essential therapeutic categories.",
  },
  {
    id: 3,
    title: "Wellness",
    slug: "wellness",
    description: "Health-supporting products for everyday wellness.",
  },
  {
    id: 4,
    title: "Gastro Care",
    slug: "gastro-care",
    description: "Products supporting digestive and gastrointestinal care.",
  },
  {
    id: 5,
    title: "Pain Relief",
    slug: "pain-relief",
    description: "Formulations for pain relief and anti-inflammatory care.",
  },
  {
    id: 6,
    title: "Respiratory Care",
    slug: "respiratory-care",
    description: "Products for cough, allergy, and respiratory support.",
  },
];

export const products = [
  {
    id: 1,
    itemName: "APPETY-SYRUP",
    composition:
      "Cyproheptadine HCl 2mg, Tricholine Citrate 275mg, Sorbitol Solution 70% 3.575g / 5ml",
    packaging: "200ml",
    category: "gastro-care",
    image: appetyImage,
  },
  {
    id: 2,
    itemName: "ATRO D3 CAP",
    composition: "Cholecalciferol 60000 IU softgel capsule",
    packaging: "Strip of 4 capsules",
    category: "wellness",
    image: atroD3CapImage,
  },
  {
    id: 3,
    itemName: "ATRO SHINE CREAM",
    composition:
      "Hydroquinone 2% w/w, Tretinoin 0.025% w/w, Mometasone Furoate 0.1% w/w",
    packaging: "15g",
    category: "dermatology",
    image: atroShineImage,
  },
  {
    id: 4,
    itemName: "ATRO-D3 DROPS",
    composition: "Cholecalciferol 800 IU",
    packaging: "30ml",
    category: "wellness",
    image: atroD3DropImage,
  },
  {
    id: 5,
    itemName: "ATRO-D3 NANO SHOTS",
    composition: "Cholecalciferol 60000 IU, sugar-free",
    packaging: "5ml",
    category: "wellness",
    image: atroD3NanoShotImage,
  },
  {
    id: 6,
    itemName: "ATROMOL-MR TAB",
    composition:
      "Aceclofenac 100mg, Paracetamol 325mg, Chlorzoxazone 250mg tablet",
    packaging: "Strip of 10 tablets",
    category: "pain-relief",
    image: atromolMrImage,
  },
  {
    id: 7,
    itemName: "ATROMOL-P TAB",
    composition: "Aceclofenac 100mg, Paracetamol 325mg tablet",
    packaging: "Strip of 10 tablets",
    category: "pain-relief",
    image: atromolPImage,
  },
  {
    id: 8,
    itemName: "ATROMOL-SP TAB",
    composition:
      "Aceclofenac 100mg, Paracetamol 325mg, Serratiopeptidase 15mg tablet",
    packaging: "Strip of 10 tablets",
    category: "pain-relief",
    image: atromolSpImage,
  },
  {
    id: 9,
    itemName: "ATROPRAZ-40 MG TAB",
    composition: "Pantoprazole 40mg tablet",
    packaging: "Strip of 10 tablets",
    category: "gastro-care",
    image: atropraz40Image,
  },
  {
    id: 10,
    itemName: "ATROPRAZ-DSR CAP",
    composition: "Pantoprazole 40mg, Domperidone SR 30mg capsule",
    packaging: "Strip of 15 capsules",
    category: "gastro-care",
    image: atroprazDsrImage,
  },
  {
    id: 11,
    itemName: "ATROVIT-E CAP",
    composition:
      "Vitamin E 400 IU, Wheat Germ Oil 50mg, Omega-3 Fatty Acid 100mg softgel capsule",
    packaging: "Strip of 15 capsules",
    category: "wellness",
    image: atrovitEImage,
  },
  {
    id: 12,
    itemName: "AT-ZO SYRUP",
    composition: "Fungal Diastase (1:2000) 50mg, Papain 30mg, sugar-free",
    packaging: "200ml",
    category: "gastro-care",
    image: atZoImage,
  },
  {
    id: 13,
    itemName: "COBALAX TAB",
    composition:
      "Methylcobalamin 1500mcg, Folic Acid 1.5mg, Alpha Lipoic Acid 100mg, Pyridoxine 3mg, Vitamin D3 1000 IU tablet",
    packaging: "Strip of 10 tablets",
    category: "wellness",
    image: cobalaxImage,
  },
  {
    id: 14,
    itemName: "D6CORT TAB",
    composition: "Deflazacort 6mg tablet",
    packaging: "20 × 10 tablets",
    category: "general-medicines",
    image: d6cortImage,
  },
  {
    id: 15,
    itemName: "HEMO-Q SYRUP",
    composition:
      "Ferric Ammonium Citrate equivalent to Elemental Iron 32mg, Folic Acid 0.5mg, Vitamin B12 7.5mcg",
    packaging: "200ml",
    category: "wellness",
    image: hemoQSyrupImage,
  },
  {
    id: 16,
    itemName: "HEMO-Q TAB",
    composition:
      "Ferrous Ascorbate 100mg, Folic Acid 1.5mg, Zinc 22.5mg tablet",
    packaging: "Strip of 10 tablets",
    category: "wellness",
    image: hemoQTabImage,
  },
  {
    id: 17,
    itemName: "ITROBID-100MG CAP",
    composition: "Itraconazole 100mg capsule",
    packaging: "Strip of 10 capsules",
    category: "dermatology",
    image: itrobid100Image,
  },
  {
    id: 18,
    itemName: "ITROBID-200MG CAP",
    composition: "Itraconazole 200mg capsule",
    packaging: "Strip of 10 capsules",
    category: "dermatology",
    image: itrobid200Image,
  },
  {
    id: 19,
    itemName: "K2 NOVA CAP",
    composition:
      "Calcitriol 0.25mcg, Calcium Citrate Malate 500mg, Vitamin K2-7, Methylcobalamin 1500mcg, Zinc Oxide 7.5mg, Magnesium Oxide 20mg, L-Methyl Folate 800mcg",
    packaging: "Strip of 10 capsules",
    category: "wellness",
    image: k2NovaImage,
  },
  {
    id: 20,
    itemName: "KAYA KETAN SYRUP",
    composition: "Composition to be updated",
    packaging: "300ml",
    category: "wellness",
    image: kayaKetanImage,
  },
  {
    id: 21,
    itemName: "KETRIX SHAMPOO",
    composition: "Ketoconazole 2% w/v, Zinc Pyrithione (ZPTO) 1% w/v",
    packaging: "100ml",
    category: "dermatology",
    image: ketrixImage,
  },
  {
    id: 23,
    itemName: "KT-10 DT TAB",
    composition: "Ketorolac 10mg tablet",
    packaging: "Strip of 15 tablets",
    category: "pain-relief",
    image: kt10Image,
  },
  {
    id: 24,
    itemName: "LAXSIL SYRUP",
    composition:
      "Multivitamin, Multimineral, Lycopene, L-Lysine and Antioxidants syrup",
    packaging: "200ml",
    category: "wellness",
    image: laxsilImage,
  },
  {
    id: 25,
    itemName: "LIVER FRESH SYRUP",
    composition: "Composition to be updated",
    packaging: "300ml",
    category: "gastro-care",
    image: liverFreshImage,
  },
  {
    id: 26,
    itemName: "LULICORE CREAM",
    composition: "Luliconazole 1% w/w cream",
    packaging: "30g",
    category: "dermatology",
    image: lulicoreImage,
  },
  {
    id: 27,
    itemName: "MAGIC-LLP SYRUP",
    composition:
      "Liquid Paraffin 1.25ml, Milk of Magnesia 3.75ml, Sodium Picosulphate 3.33mg",
    packaging: "200ml",
    category: "gastro-care",
    image: magicLlpImage,
  },
  {
    id: 28,
    itemName: "METRO-LC TAB",
    composition: "Montelukast 10mg, Levocetirizine HCl 5mg tablet",
    packaging: "Strip of 10 tablets",
    category: "respiratory-care",
    image: metroLcTabImage,
  },
  {
    id: 29,
    itemName: "METRO-10 TABLET",
    composition: "Levocetirizine HCl dispersible tablet 10mg",
    packaging: "Strip of 10 tablets",
    category: "respiratory-care",
    image: metro10Image,
  },
  {
    id: 30,
    itemName: "METRO-LC SYRUP",
    composition: "Montelukast 4mg, Levocetirizine 2.5mg / 5ml",
    packaging: "60ml",
    category: "respiratory-care",
    image: metroLcSyrupImage,
  },
  {
    id: 31,
    itemName: "MOVEXA GEL",
    composition:
      "Diclofenac Diethylamine 1.16% w/w, Virgin Linseed Oil 3% w/w, Methyl Salicylate 10% w/w, Menthol 5% w/w, Capsaicin 0.025% w/w",
    packaging: "30g",
    category: "pain-relief",
    image: movexaImage,
  },
  {
    id: 32,
    itemName: "PICHGLOW FACE WASH",
    composition: "Infused with Natural Betaine, Glycolic Acid and Niacinamide",
    packaging: "100ml",
    category: "dermatology",
    image: pichglowImage,
  },
  {
    id: 33,
    itemName: "P-ONE POWDER",
    composition: "Soya Protein, Whey Protein and DHA",
    packaging: "200g",
    category: "wellness",
    image: pOneImage,
  },
  {
    id: 34,
    itemName: "RABAZEP-DSR CAP",
    composition: "Rabeprazole 20mg, Domperidone SR 30mg capsule",
    packaging: "Strip of 15 capsules",
    category: "gastro-care",
    image: rabazepDsrImage,
  },
  {
    id: 35,
    itemName: "RELICOFF-DM SYRUP",
    composition:
      "Dextromethorphan Hydrobromide 10mg, Chlorpheniramine Maleate 2mg, Phenylephrine Hydrochloride 5mg / 5ml",
    packaging: "100ml",
    category: "respiratory-care",
    image: relicoffDmImage,
  },
  {
    id: 36,
    itemName: "RELICOFF-LS SYRUP",
    composition:
      "Levosalbutamol Sulphate 1mg, Ambroxol HCl 30mg, Guaiphenesin 50mg / 5ml",
    packaging: "100ml",
    category: "respiratory-care",
    image: relicoffLsImage,
  },
  {
    id: 37,
    itemName: "SUNDEK-80 SUNSCREEN",
    composition: "SPF 80 PA++++; UVA, UVB, IR and 5G protection",
    packaging: "50g",
    category: "dermatology",
    image: sundekImage,
  },
  {
    id: 38,
    itemName: "ULTRACAL TABLET",
    composition:
      "Calcium Citrate 1000mg, Magnesium Hydroxide 100mg, Zinc Sulphate 4mg, Vitamin D3 200 IU",
    packaging: "Strip of 10 tablets",
    category: "wellness",
    image: ultracalImage,
  },
  {
    id: 39,
    itemName: "VIGREN-100MG TAB",
    composition: "Sildenafil 100mg tablet",
    packaging: "Strip of 4 tablets",
    category: "general-medicines",
    image: vigren100Image,
  },
  {
    id: 40,
    itemName: "ZAROXY TABLET",
    composition:
      "Multivitamins, Minerals, Vitamin B12, Lycopene, Antioxidants and Zinc tablets",
    packaging: "Strip of 15 tablets",
    category: "wellness",
    image: zaroxyImage,
  },
  {
    id: 41,
    itemName: "ZYRAFT SUSPENSION",
    composition:
      "Sodium Alginate 250mg, Sodium Bicarbonate 133.5mg, Calcium Carbonate 80mg / 5ml suspension",
    packaging: "150ml",
    category: "gastro-care",
    image: zyraftImage,
  },
];