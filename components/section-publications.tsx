import { breakpoints } from 'utils/styles';

const publications = [
  `Bryan, M. C.; Dunn, P. J.; Entwistle, D.; Gallou, F.; Koenig, S. G.; Hayler, J. D.; Hickey, M. R.; Hughes, S.; Kopach, M. E.; Moine, G.; Richardson, P.; Roschangar, F.; Steven, A.; Weiberth, F. J. “Key Green Chemistry Research Areas from a Pharmaceutical Manufacturers' Perspective Revisited" <i>Green Chemistry&nbsp;</i> <b>2018</b>, <i>20</i>, 5082-5103 (DOI: 10.1039/c8gc01276h).`,
  `Weiberth, F. J.; Powers, M. R; Gallin C.; McDonald, D. “Segmented Tube Reactors (STR): a Simple Tool to Screen Multiple Reactions in Parallel in Batch Mode Within a Single Tube” <i>Org. Process Res. Dev.&nbsp;</i> <b>2018</b>, <i>22</i>, 512-519 (DOI: 10.1021/acs.oprd.8b00009).`,
  `F.J. Weiberth, A. J. Bourque, S. Elenbaas, R. Hanna, M. R. Powers, C. S. Siegel, J. Zhao “Scalable Syntheses of Chirally Pure Mono-protected and Orthogonally Di-protected cis-3,4-Diaminotetrahydrofurans” <i>Synthesis&nbsp;</i> <b>2017</b>, <i>49(18)</i>, 4133-4136 (DOI: 10.1055/s-0036-1588459). `,
  `Weiberth, F. J. et al. “Phenyloxadiazole Derivatives as PGDS Inhibitors” US Pat. 9469627, 2016.`,
  `Weiberth, F. J.; Gill, H. S.; Lee, G. E.; Ngo, N. P.; Shrimp, F. L., II; Chen, X.; D’Netto, G.; Jackson, B. R.; Jiang, Y.; Kumar, N.; Roberts, F.; Zlotnikov, E. “Development of a Synthesis of a 2,3-Disubstituted-4,7 Diazaindole Including Large-Scale Application of CH3Li/TiC14-Mediated Methylation of an Enolizable Ketone” <i>Org. Process Res. Dev.&nbsp;</i> <b>2015</b>, <i>19</i>, 806-811.`,
  `deMontigny, P.; Harris, D.; Ho, C.; Weiberth, F.; Galli, B.; Faller, B. Discover a Drug Substance, Formulate, and Develop it to a Product. In <i>The Practice of Medicinal Chemistry</i>; Wermuth, C. G.; Aldous, D.; Raboisson, P.; Rognan D., Eds.; Elsevier Science: Boston, 2015; Chapter 33, pp 793-803.`,
  `Weiberth, F. J.; Yu, Y.; Subotkowski, W.; Pemberton, C. “Demonstration on Pilot-Plant Scale of the Utility of 1,5,7-Triazabicyclo[4.4.0]dec-5-ene (TBD) as a Catalyst in the Efficient Amidation of an Unactivated Methyl Ester <i>Org. Process Res. Dev.&nbsp;</i> <b>2012</b>, <i>16</i>, 1967-1969.`,
  `Subotkowski, W.; Friedrich, D.; Weiberth, F. J. “Syntheses and NMR Characterizations of Epimeric 4-Deoxy-4-fluoro Carbohydrates” <i>Carbohydr. Res.&nbsp;</i> <b>2011</b>, <i>346</i>, 2323-2326.`,
  `Weiberth, F. J.; Hanna, R. G.; Lee, G. E.; Polverine, Y.; Klein, J. T. “<i>N</i>-Amination of Indoles on Pilot-Plant Scale via Simultaneous and Proportional Metering of Reagents” <i>Org. Process Res. Dev.&nbsp;</i> <b>2011</b>, <i>15</i>, 704-709.`,
  `Weiberth, F. J. et al. “Phenyloxadiazole Derivatives as PGDS Inhibitors” PCT Int. Appl. WO2011044307, 2011.`,
  `Weiberth, F. J.; Gill, H. S.; Jiang, Y.; Lee, G. E.; Lienard, P.; Pemberton, C.; Powers, M. R.; Subotkowski, W.; Vanasse, B. J.; Yu, Y. “Process Development of Selectively Benzoylated and Fluorinated Glycosyl Donors” <i>Org. Process Res. Dev.&nbsp;</i> <b>2010</b>, <i>14</i>, 623-631.`,
  `Weiberth, F. J. et al. “Improved Chemical Synthesis of Diazaindoles by Chichibabin Cyclization” PCT Int. Appl. WO2010107969, 2010.`,
  `Weiberth, F. J. et al. “A Novel Crystalline Heteroaromatic Fluoroglycoside Hydrate, Processes for Making, Methods of Use and Pharmaceutical Compositions Thereof” PCT Int. Appl. WO2010066690, 2010.`,
  `Weiberth, F. J. et al. “A Crystalline Heteroaromatic Fluoroglycoside Hydrate, Processes for Making, Methods of Use and Pharmaceutical Compositions Thereof” PCT Int. Appl. WO2010068601, 2010.`,
  `Weiberth, F. J. et al. “Novel Polymorphic Forms of 4-[(Methoxyphenyl)methyl]-5-(trifluoromethyl)-1<i>H</i>-pyrazol-3-yl)-4-deoxy-4-fluoro-\u{03B2}-D-glucopyranoside Including Hydrates Thereof and the Preparations Thereof” PCT Int. Appl. WO2010068605, 2010.`,
  `Weiberth, F. J. et al. “Novel Heterocyclic Amide Derivatives and Their Uses as Dopamine D<sub>3</sub> Receptor Ligands” U.S. Pat. 7550469, 2009.`,
  `Weiberth, F. J. et al. “Process Improvement (for Preparing Bromopropylidene Compounds)” PCT Int. Appl. WO2009070556, 2009.`,
  `Weiberth, F. J. et al. “Improved Preparation of Azaindole Compounds” PCT Int. Appl. WO2008014249, 2008.`,
  `Weiberth, F. J. et al. “Process for the Preparation of <i>N</i>-Amino Substituted Heterocyclic Compounds” U.S. Pat. 7112682, 2006.`,
  `Watson, T. J. N.; Horgan, S. H.; Shah, R. S.; Farr, R. A.; Schnettler, R. A.; Nevill, Jr., C. R.; Weiberth, F. J.; Huber, E. W.; Baron, B. M.; Webster, M. E.; Mishra, R. K.; Harrison, B. L.; Nyce, P. L.; Rand, C. L.; Goralski, C. T. “Chemical Development of MDL 103371:  An <i>N</i>-Methyl-D-Aspartate-Type Glycine Receptor Antagonist for the Treatment of Stroke” <i>Org. Process Res. Dev.&nbsp;</i> <b>2000</b>, <i>4(6)</i>, 477-487.`,
  `Weiberth, F. J. “One-Pot Preparation of <i>N</i>-(Carbonylamino)amino Acids and Half-Acid/Half-Ester Urea Dipeptides Directly from -Amino Acids” <i>Tetrahedron Lett.&nbsp;</i> <b>1999</b>, <i>40</i>, 2895-2898.`,
  `Lee, T. B. K.; Tebben, A. J.; Weiberth, F. J.; Wong, G. S. K. “An Expedient Large-Scale Synthesis of a Dibenz[b,e]oxepinone Derivative” <i>Synth. Commun.&nbsp;</i> <b>1998</b>, <i>28</i>, 747-751.`,
  `Weiberth, F. J. "Retractable Batch Reactor Sampler" U.S. Pat. 5747708, 1998.`,
  `Weiberth, F. J. "Safely Measuring pH in Reactors" <i>Chem. Process.&nbsp;</i> <b>1996</b>, <i>59(4)</i>, 75-78.`,
  `Wong, G. S. K.; Lee, T. B. K.; Weiberth, F. J. "Method of Preparation of Physostigmine Carbamate Derivatives from Eserotholes" U.S. Pat. 5455354, 1995.`,
  `Wong, G. S. K.; Lee, T. B. K.; Weiberth, F. J. "Method of Preparation of Physostigmine Carbamate Derivatives from Eserotholes" U.S. Pat. 5302721, 1994.`,
  `Weiberth, F. J. "Portable pH Controller Enhances Versatility of Pilot Plant" <i>Chem. Process.&nbsp;</i> <b>1994</b>, <i>57(9)</i>, 57-62.`,
  `Weiberth, F. J.; Lee, T. B. K. "Versatile and Flexible” <i>Schott Information&nbsp;</i> <b>1991</b>, <i>Issue 59</i>, 16-17.`,
  `Weiberth, F. J.; Lee, T. B. K. "Universal Reactor System Expedites Process Scale-Up" <i>Chem. Process.&nbsp;</i> <b>1990</b>, <i>53(6)</i>, 95-97.`,
  `Weiberth, F. J.; Lee, T. B. K. "Steam Injection Heating System Improves Temperature Control and Drying Efficiency of Conical Dryer" <i>Chem. Process.&nbsp;</i> <b>1988</b>, <i>51(10)</i>, 62-63.`,
  `Weiberth, F. J.; Lee, T. B. K. "Jacketed Vessel on a Portable Stand Finds use in a Variety of Pharmaceutical Operations" <i>Chem. Process.&nbsp;</i> <b>1988</b>, <i>51(5)</i>, 142-143.`,
  `Weiberth, F. J.; Hall, S. S. "Copper(I)-Activated Addition of Grignard Reagents to Nitriles.  Synthesis of Ketimines, Ketones, and Amines" <b>J. Org. Chem.&nbsp;</i> <b>1987</b>, <i>52</i>, 3901-3904.`,
  `Weiberth, F. J.; Hall, S. S. "Tandem Alkylation-Reduction of Nitriles.  Synthesis of Branched Primary Amines" <i>J. Org. Chem.&nbsp;</i> <b>1986</b>, <i>51</i>, 5338-5341.`,
  `Lee, T. B. K.; Weiberth, F. J. "An Economical and Space Efficient Solution to Solvent Recovery" <i>Chem. Process.&nbsp;</i> <b>1985</b>, <i>48(11)</i>, 81.`,
  `Weiberth, F. J.; Hall, S. S. "Tandem Alkylation-Reduction. Highly Stereoselective Synthesis of (<i>E</i>)-1-Hydroxymethyl Methyl Propenyl Ethers from Aldehydes Using 1-Lithio-1-Methoxyallene" <i>J. Org. Chem.&nbsp;</i> <b>1985</b>, <i>50</i>, 5308-5314.`,
  `Ranus, W.; Loewenstein, R.; Weiberth, F.; Zirlis, J.; Bugbee, H. "Carboxylation of Metal Aryloxides" Eur. Pat. Appl. EP 102833, 1984; <u>Chem. Abstr. 1984</u>, <u>101</u>, 72430a.`,
];

export default function SectionPublications() {
  return (
    <>
      <div
        css={{
          lineHeight: 1.4,
          fontSize: 16,
          [breakpoints.mobile]: {
            lineHeight: 1.3,
            fontSize: 14,
          },
          '> div': {
            marginBottom: 18,
          },
          '> div:last-of-type': {
            marginBottom: 0,
          },
        }}
      >
        {publications.map((publication, i) => {
          return (
            <div key={`publication-${i}`}>
              <div
                css={{
                  '> b': { fontWeight: 600 },
                  '> sup': { fontSize: 10 },
                }}
                dangerouslySetInnerHTML={{ __html: publication }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
