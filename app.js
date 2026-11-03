const repo = 'https://github.com/jiadong324/1KG_LongRead_SV';
const ext = (url,
             label) => `<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`;
const heading = (id,
                 title) => `<h2 id="${id}">${title}</h2>`;
const flow = (label, nodes,
              foot = '') => `<div class="flow"><div class="flow-label">${label}</div><div class="flow-row">${nodes.map(
    (n,
     i) => `${i ? '<span class="arrow" aria-hidden="true">→</span>' : ''}<div class="node ${i === nodes.length - 1 ? 'output' : ''}"><strong>${n[0]}</strong><small>${n[1]}</small></div>`)
    .join(
        '')}</div>${foot ? `<div class="flow-foot">${foot}</div>` : ''}</div>`;
const steps = items => `<ol class="steps">${items.map(
    ([a, b]) => `<li><h3>${a}</h3><p>${b}</p></li>`)
    .join('')}</ol>`;
const code = s => `<div class="code-wrap"><pre><code>${s.replaceAll(
    '&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>',
        '&gt;')}</code></pre><button class="copy">Copy</button></div>`;
const pages = [
    {
        id: 'overview',
        title: 'Overview',
        group: 'GETTING STARTED',
        search: 'introduction 1218 614522 catalog',
        body: () => `<div class="eyebrow">1000 Genomes Project · Structural variation</div><h1>A pangenome resource.<br><em>A clearer view of variation.</em></h1><p class="lead">Explore human structural variation with long-read sequencing. A practical guide to discovering variants, building a population reference, and bringing pangenome genomics into your research.</p><div class="actions"><a class="button" href="#start">Start with your data <span>→</span></a><a class="button secondary" href="#workflows">Explore the workflows <span>↗</span></a></div><div class="stats"><div><strong>1,218</strong><span>long-read genomes</span></div><div><strong>614,522<sup> *</sup></strong><span>structural variants · T2T-CHM13</span></div><div><strong>26</strong><span>1KGP populations represented</span></div></div><div class="section-heading">${heading(
            'your-path',
            'Find your starting point')}<span>TWO SEQUENCING PATHS</span></div><div class="path-grid"><a class="path" href="#long-reads"><span class="icon">≋</span><span class="tag">LONG-READ SEQUENCING</span><h3 style="margin-top:13px">Discover and interpret SVs</h3><p>Call variants from HiFi or ONT data, assess breakpoint support, and compare against population variation.</p><span class="link">Follow the long-read tutorial →</span></a><a class="path" href="#short-reads"><span class="icon">▤</span><span class="tag blue">SHORT-READ SEQUENCING</span><h3 style="margin-top:13px">Genotype known pangenome alleles</h3><p>Use a haplotype reference panel to genotype cataloged variants or investigate selected complex loci.</p><span class="link">Follow the short-read tutorial →</span></a></div>${heading(
            'resource-map',
            'From genomes to a community resource')}${flow(
            '01 DISCOVERY   /   02 INTEGRATION   /   03 APPLICATION',
            [['Discover SVs', 'Per-genome reads & assemblies'], ['Build the catalog', 'Cross-sample allele integration'], ['Study new genomes', 'Genotyping & rare SV analysis']],
            'Discovery establishes the alleles. Genotyping measures those alleles in new samples.')}<p style="font-size:15px">The resource brings together 293 HGSVC/HPRC near-complete genomes and 925 additional ONT genomes. Use it as a population reference for allele comparison, haplotype-based genotyping, and downstream genetic studies.</p>${heading(
            'about',
            'About this guide')}<p style="font-size:15px">Based on <a href="https://www.medrxiv.org/content/10.64898/2026.08.21.26361050v1" target="_blank" rel="noopener"><em>A high-resolution human pangenome structural variant resource for improved disease association</em></a>, Lin, Gustafson and colleagues. The study constructs a population SV catalog against linear references; the PanGenie application separately builds a haplotype graph reference. Pangenome-based analysis here does not require graph alignment at every step.</p><p style="font-size:14px;color:#8a967f">* 614,522 insertions/deletions on T2T-CHM13; the GRCh38 catalog used for rare-SV analysis contains 587,779. Counts and thresholds describe the supplied manuscript version.</p>`
    },
    {
        id: 'start',
        title: 'Choose your analysis',
        group: 'GETTING STARTED',
        search: 'decision inputs reference genome checklist',
        body: () => `<div class="eyebrow">Getting started</div><h1>Start with your question.</h1><p class="lead">Choose an analysis by the data you have and the biological question you want to answer.</p>${heading(
            'choose',
            'Which path fits your study?')}<table><thead><tr><th>Your goal</th><th>Input</th><th>Start here</th></tr></thead><tbody><tr><td>Find variants, including alleles absent from the catalog</td><td>ONT / HiFi reads; optional assemblies</td><td><a href="#long-reads">Long-read discovery →</a></td></tr><tr><td>Genotype many known variants</td><td>Short reads + phased haplotype panel</td><td><a href="#short-reads">PanGenie tutorial →</a></td></tr><tr><td>Resolve selected complex loci</td><td>Reads + locus-specific haplotype sequences</td><td><a href="#short-reads">Targeted Locityper analysis →</a></td></tr><tr><td>Prioritize rare SV candidates</td><td>Per-sample calls + matching population catalog</td><td><a href="#rare-svs">Rare-SV application →</a></td></tr></tbody></table>${heading(
            'prepare',
            'Before you begin')}${steps(
            [['Fix the reference and release', 'Use the exact matching FASTA, VCF, annotations, contig names and callable-region definitions. GRCh38 and T2T-CHM13 coordinates are not interchangeable.'], ['Record data quality and provenance', 'Record platform, read coverage, read N50, software versions, commands and sample identities. Study integration selected genomes using coverage and read-length criteria of 15× and 15 kbp; these are study-specific selection criteria.'], ['Separate absence from missingness', 'A missing genotype is not proof of a reference allele. Keep callability and genotype quality when comparing samples.'], ['Define a validation plan', 'Benchmark in appropriate confident regions; use leave-one-out panels for matched samples to avoid leakage. Inspect difficult repeat loci and confirm key findings independently.']])}${heading(
            'outputs',
            'What to retain')}<p>Keep the variant sequences, phased genotypes where available, per-sample callability, allele frequencies, source tool versions and reference identity alongside every result. A catalog-only approach cannot discover alleles absent from its reference panel.</p>`
    },
    {
        id: 'workflows',
        title: 'Workflow atlas',
        group: 'BUILD THE RESOURCE',
        search: 'flowchart tools discovery genotyping BoostSV Truvari Kanpig',
        body: () => `<div class="eyebrow">Workflow atlas</div><h1>One resource.<br>Distinct analytical stages.</h1><p class="lead">Follow the alleles from per-genome discovery to population integration, then choose how to study them in a new dataset.</p>${heading(
            'discovery',
            '01 · Establish the variant set')}${flow(
            'ASSEMBLY-SUPPORTED DISCOVERY',
            [['Phased assemblies', 'HGSVC / HPRC; UW-ONT dual assemblies'], ['Assembly callers', 'PAV · SVIM-asm · dipcall'], ['Cross-caller support', 'Truvari'], ['Breakpoint assessment', 'BoostSV scores']])}${flow(
            'READ-BASED DISCOVERY · BI-ONT / UDN',
            [['Aligned ONT reads', 'minimap2; PMDV phasing for BI-ONT'], ['Read callers', 'cuteSV · Sniffles · DELLY · DeBreak'], ['Retain supported calls', 'At least two callers'], ['Phased genotypes', 'PMDV+Kanpig']])}<p>HiFi alignments use pbmm2; ONT alignments use minimap2. The full study also uses pbsv, sawfish and NanoVar where applicable. These callers are not all run on every platform. UDN discovery follows the four-caller read-based path without assembly; BI-ONT includes phasing consistency filtering.</p>${heading(
            'integration',
            '02 · Create the population catalog')}${flow(
            'CROSS-SAMPLE INTEGRATION',
            [['Per-genome SVs', 'Calls + callable regions'], ['Merge similar alleles', 'Truvari · 90% sequence / size; 500 bp'], ['Choose best allele', 'Highest BoostSV score'], ['Annotate the catalog', 'GT harmonization, function, etc']])}<p>Integration considers insertions and deletions of 50 bp–100 kbp. Inversions and large segmental duplication analyses are separate study components. Reference genotypes are assigned using callable regions; unsupported regions stay missing.</p>${heading(
            'genotyping',
            '03 · Genotype known alleles')}${flow(
            'SHORT READS · GENOME-WIDE PANEL',
            [['Phased haplotype panel', 'SVs + same-haplotype SNVs / indels'], ['PanGenie', 'Read k-mers + reference haplotypes'], ['QC and evaluation', 'Leave-one-out · quality · Mendelian checks'], ['New-sample genotypes', 'Cataloged alleles only']])}${flow(
            'TARGETED LOCI · STUDY BIOBANK APPLICATION',
            [['Locus reference panel', 'VCF / multi-FASTA haplotypes'], ['Locityper', 'Short-read targeted genotyping'], ['Validate each target', 'Study threshold: F1 ≥ 0.8'], ['Association analysis', 'PLINK2 · fine-mapping']])}${heading(
            'roles',
            'What does each tool contribute?')}<table><thead><tr><th>Role</th><th>Tools</th><th>Contribution</th></tr></thead><tbody><tr><td>Discover alleles</td><td>PAV, SVIM-asm, dipcall; read-based callers</td><td>Generate candidate SVs from assemblies or read alignments</td></tr><tr><td>Evaluate breakpoints</td><td>BoostSV</td><td>Assess alignment ambiguity; does not discover or genotype SVs</td></tr><tr><td>Collapse / compare</td><td>Truvari</td><td>Match alleles within / across samples; does not infer genotypes from reads</td></tr><tr><td>Long-read genotyping</td><td>Kanpig</td><td>Assign phased genotypes in the study BI-ONT workflow</td></tr><tr><td>Short-read genotyping</td><td>PanGenie, Locityper</td><td>Measure known panel alleles genome-wide or at targeted loci</td></tr></tbody></table>`
    },
    {
        id: 'long-reads',
        title: 'Long-read tutorial',
        group: 'TUTORIALS',
        search: 'ONT HiFi minimap2 pbmm2 discovery Kanpig',
        body: () => `<div class="eyebrow">Tutorial 01 · ONT & PacBio HiFi</div><h1>From long reads<br>to interpretable SVs.</h1><p class="lead">Use long reads for new allele discovery. Add assembly evidence when available, then compare sequence-resolved calls with the population reference.</p>${heading(
            'inputs',
            'Inputs and expected outputs')}<p><b>Inputs:</b> ONT or HiFi reads, a matching reference FASTA, optional haplotype assemblies, and a population VCF on the same reference. <b>Outputs:</b> supported per-sample SVs, breakpoint evidence, callable regions and annotated comparison results.</p>${heading(
            'procedure',
            'Walk through the analysis')}${steps(
            [['Align reads to the correct reference', 'Use minimap2 for ONT or pbmm2 for HiFi. Sort and index BAMs. Confirm contig names and inspect read coverage before variant calling.'], ['Discover SVs using complementary callers', 'For the study ONT read-only route, run cuteSV, Sniffles, DELLY and DeBreak and retain calls supported by at least two. With assemblies, add PAV, SVIM-asm and dipcall; retain the PAV representation when integrating supported assembly calls.'], ['Collapse within samples and evaluate breakpoints', 'The manuscript uses Truvari v5.2.0 with 80% sequence and size similarity and 1 kbp breakpoint distance for within-sample collapse. BoostSV measures breakpoint alignment ambiguity; it is not a pathogenicity score.'], ['Assign genotypes and preserve callability', 'For the BI-ONT route, use PMDV-phased reads with Kanpig v1.1.0 and remove conflicting phasing. For integrated catalogs, infer reference alleles only in callable regions. Do not turn every missing call into 0/0.'], ['Benchmark before biological interpretation', 'Use a suitable truth set with its confident regions. Stratify performance by type, size and repeat context. Evaluate evidence independently of the catalog you will use for filtering.'], ['Compare and annotate', 'Use matching reference and allele representations when comparing with the population catalog. For rare candidates continue to the rare-SV chapter; retain evidence for manual review.']])}${heading(
            'alignment',
            'Example · ONT alignment')}<p>Illustrative alignment commands using the manuscript minimap2 settings. Replace input paths and choose resources for your dataset. This step alone does not call SVs.</p>${code(
            'minimap2 -t 16 -a -x map-ont --eqx reference.fa reads.fastq.gz | \\\n  samtools sort -@ 8 -o sample.sorted.bam\nsamtools index sample.sorted.bam')}${heading(
            'known',
            'If you only need known-site genotyping')}<p>Use a genotyper compatible with your long-read data and known alleles. The manuscript uses Kanpig for BI-ONT phased genotypes. Keep genotyping separate from de novo discovery, and validate performance on your platform and loci.</p><p>${ext(
            'https://github.com/jiadong324/PanSV',
            'Study discovery workflow')} · ${ext(
            'https://github.com/jiadong324/BoostSV',
            'BoostSV documentation')}</p>`
    },
    {
        id: 'short-reads',
        title: 'Short-read tutorial',
        group: 'TUTORIALS',
        search: 'PanGenie Locityper Illumina genotyping panel',
        body: () => `<div class="eyebrow">Tutorial 02 · Short-read genomes</div><h1>Bring pangenome alleles<br>to short-read studies.</h1><p class="lead">Choose PanGenie for panel-based genotyping across the genome or Locityper for selected loci with a curated haplotype reference.</p>${heading(
            'panel',
            'Route A · PanGenie')}${steps(
            [['Prepare a phased reference panel', 'Combine SVs with SNVs and small indels from the same haplotypes. The downloadable SV-only population VCF is not a complete PanGenie panel. Follow the upstream requirements for graph bubbles and allele representation.'], ['Check the scope of the panel', 'The study excludes sex chromosomes and sites with >20% missing genotypes. Its final reference has 584 haplotypes and 143,567 SVs in bubble representation; this is distinct from the 614,522-SV integrated catalog.'], ['Index the panel and genotype reads', 'Use the version-matched PanGenie indexing and genotyping workflow, providing its required reference and read inputs. Follow the official documentation for executable commands and a runnable demo.'], ['Evaluate without sample leakage', 'When a query sample is also in the panel, leave its haplotypes out. Assess genotype concordance in matched long-read truth samples; examine difficult and rare alleles separately.'], ['Filter the genotypes', 'In the study, filters remove AC=0 sites, sites with at least 200 low-quality genotypes, Mendelian consistency <80%, or leave-one-out genotype concordance <80%. Counts are specific to the 3,202-sample cohort; adapt them only after validation.']])}<p>${ext(
            'https://github.com/eblerjana/pangenie',
            'PanGenie source and documentation')} provides installation, a demonstration dataset and the supported workflow.</p>${heading(
            'targeted',
            'Route B · Targeted genotyping with Locityper')}${steps(
            [['Define target alleles', 'Use a VCF-derived reference database for biallelic sites, or extract multi-FASTA haplotypes between unique flanking anchors for multiallelic loci. Keep coordinates and sequences on the same reference.'], ['Validate the locus reference', 'Use matched 1KGP short reads with the leave-one-out approach. The study carries forward targets with F1 ≥0.8. A complex locus requires its own validation.'], ['Genotype and inspect each target', 'Follow the Locityper preparation and genotyping documentation. Check call quality, missingness and read evidence before using the resulting allele assignments.'], ['Proceed to association analysis', 'Account for ancestry, relatedness, sample and genotype quality, phenotype definitions and multiple testing. Compare nearby SNP signals and fine-map before interpreting an SV as the driver.']])}<p>${ext(
            'https://locityper.vercel.app/',
            'Locityper documentation')} · ${ext(
            'https://github.com/EichlerLab/AoU_WDL',
            'Study association workflows')}</p>${heading(
            'limits',
            'Understand the limits')}<div class="note">Panel-based genotyping measures represented alleles. It does not establish that an unrepresented allele is absent, and it does not substitute for long-read discovery of novel structural variation.</div><p>The PanGenie and Locityper routes have different panel requirements and genomic scope. Select and validate a method for the question, rather than assuming all catalog SVs can be genotyped equally well from short reads.</p>`
    },
    {
        id: 'rare-svs',
        title: 'Rare SV applications',
        group: 'APPLICATIONS',
        search: 'UDN pathogenic rareSVpool rare clinical annotation',
        body: () => `<div class="eyebrow">Application · Rare variant prioritization</div><h1>Find rare candidates.<br>Keep the evidence.</h1><p class="lead">Use population variation to narrow a long-read SV callset, then evaluate the remaining candidates in their genomic and phenotypic context.</p>${heading(
            'rare-flow',
            'The study workflow')}${flow(
            '44 UDN PROBANDS · GRCh38',
            [['ONT SV discovery', 'Four callers; ≥2-caller support'], ['Population comparison', '587,779 GRCh38 SVs · Truvari'], ['Rare candidate selection', 'rareSVpool · unique proband calls'], ['Annotation & review', 'Gene context · IGV · phenotype']])}${heading(
            'rare-steps',
            'A practical analysis sequence')}${steps(
            [['Call and quality-control each sample', 'Follow the ONT read-only discovery route. The study aligns to GRCh38 and uses cuteSV, Sniffles, DELLY and DeBreak, retaining calls supported by at least two.'], ['Compare alleles with the matching catalog', 'Jointly merge per-individual calls with the 1,218-genome GRCh38 callset using Truvari: 90% sequence similarity, 90% size similarity and 500 bp breakpoint distance. Retain sample provenance and callability.'], ['Select rare candidates', 'The study uses rareSVpool from asap v1.1.0 to identify UDN-only SVs and retains variants unique to one proband. Absence from this resource is one prioritization criterion, not proof of pathogenicity.'], ['Annotate functional context', 'Assess coding sequence, UTR and regulatory overlap using reference-matched annotations. In the study, candidates are restricted to genes with known OMIM disease associations; regulatory candidates must overlap annotated promoters.'], ['Review every retained candidate', 'Inspect sample reads and population tracks in IGV, especially repeats where merging can miss equivalent alleles. The study excludes ambiguous lengths and calls overlapping other variants in known variable repeats.'], ['Integrate biological evidence', 'Assess phenotype fit, inheritance, segregation and independent confirmation as appropriate. Report evidence and uncertainty; a rare candidate is not a molecular diagnosis.']])}${heading(
            'cautions',
            'Why absence needs careful interpretation')}<p>Catalog representation, ancestry, coverage and inaccessible sequence can all affect whether a matching allele is observed. Check both the evidence for the proband variant and whether the locus is assessable in comparison genomes.</p><p>${ext(
            'https://github.com/EichlerLab/asap',
            'rareSVpool / asap workflow')} · <a href="#resources">Open population tracks and data →</a>`
    },
    {
        id: 'resources',
        title: 'Data & software',
        group: 'RESOURCES',
        search: 'downloads VCF Zenodo UCSC IGV GRCh38 CHM13 code',
        body: () => `<div class="eyebrow">Resource library</div><h1>Data, tools<br>and reproducible workflows.</h1><p class="lead">Find the population callsets, sequencing data and software used to build and apply this resource.</p>${heading(
            'downloads',
            'Population SV callsets')}<p>${ext(
            'https://doi.org/10.5281/zenodo.22000872',
            'Open the Zenodo release')} for the study callsets. Select the reference and cohort before downloading; retain the matching index and release information.</p><table><thead><tr><th>Reference</th><th>293-genome catalog</th><th>1,218-genome catalog</th></tr></thead><tbody><tr><td>T2T-CHM13</td><td><code>CHM13_INSDEL_293_wAF.vcf.gz</code></td><td><code>CHM13_INSDEL_1218_wAF.vcf.gz</code></td></tr><tr><td>GRCh38</td><td><code>GRCh38_INSDEL_293_wAF.vcf.gz</code></td><td><code>GRCh38_INSDEL_1218_wAF.vcf.gz</code></td></tr></tbody></table><p>Filenames follow the project repository. These are integrated insertion/deletion catalogs, not complete PanGenie reference panels.</p>${heading(
            'browse',
            'Browse variation')}<div class="resources"><p>${ext(
            'https://genome-test.gi.ucsc.edu/cgi-bin/hgTrackUi?db=hg38&g=longReadVariants',
            'UCSC long-read variant tracks')} — manuscript test-browser endpoint.</p><p>${ext(
            'https://hgwdev.gi.ucsc.edu/~max/eichlerLab/lin/hg38/lin1218.bb',
            'GRCh38 BigBed track')} · ${ext(
            'https://hgwdev.gi.ucsc.edu/~max/eichlerLab/lin/hs1/lin1218.bb',
            'T2T-CHM13 BigBed track')} — manuscript IGV-compatible track URLs.</p><p>${ext(
            'https://gnomad-lr-browser-dpsnoyqx6q-ue.a.run.app/long-read-examples',
            'gnomAD-LR demonstration')} — explicitly identified in the manuscript as a demo, not the final official release.</p></div>${heading(
            'sequencing',
            'Sequencing and assembly data')}<table><thead><tr><th>Source</th><th>Unique genomes in integrated study</th><th>Access</th></tr></thead><tbody><tr><td>HPRC</td><td>232</td><td>${ext(
            'https://github.com/human-pangenomics/hprc_intermediate_assembly',
            'Assembly and read data')}</td></tr><tr><td>HGSVC</td><td>61</td><td>${ext(
            'https://ftp.1000genomes.ebi.ac.uk/vol1/ftp/data_collections/HGSVC/',
            'HGSVC collection')}</td></tr><tr><td>UW-ONT</td><td>480</td><td>${ext(
            'https://s3.amazonaws.com/1000g-ont/index.html?prefix=PROCESSED_DATA/',
            'Processed data')}</td></tr><tr><td>BI-ONT</td><td>445</td><td>${ext(
            'https://ftp.1000genomes.ebi.ac.uk/vol1/ftp/data_collections/1KG_ONT_VIENNA/',
            'Aligned read collection')}</td></tr></tbody></table><p>Cohort counts above refer to unique genomes used for the integrated callset, not every sequenced genome in the source collections. UDN genomic and phenotypic data are controlled-access under dbGaP accession phs001232.</p>${heading(
            'software',
            'Software and workflows')}<div class="resources"><p>${ext(
            repo,
            '1KG_LongRead_SV')} — study data access and analysis entry point.</p><p>${ext(
            'https://github.com/jiadong324/PanSV',
            'PanSV')} — discovery and reference-panel workflow.</p><p>${ext(
            'https://github.com/jiadong324/BoostSV',
            'BoostSV')} — breakpoint alignment evaluation.</p><p>${ext(
            'https://github.com/eblerjana/pangenie',
            'PanGenie')} — haplotype-panel short-read genotyping.</p><p>${ext(
            'https://locityper.vercel.app/',
            'Locityper')} — targeted haplotype genotyping.</p><p>${ext(
            'https://github.com/EichlerLab/asap',
            'asap')} — annotation and rare-SV analysis.</p><p>${ext(
            'https://github.com/EichlerLab/AoU_WDL',
            'AoU WDL workflows')} — targeted genotyping, PheWAS and fine-mapping.</p></div>`
    },
    {
        id: 'about',
        title: 'Study & citation',
        group: 'RESOURCES',
        search: 'paper manuscript citation authors community',
        body: () => `<div class="eyebrow">Study & community</div><h1>A shared reference<br>for structural variation.</h1><p class="lead">This guide accompanies the 1000 Genomes Project resource and its applications to human genetic research.</p>${heading(
            'study',
            'Latest study')}<p><a href="https://www.medrxiv.org/content/10.64898/2026.08.21.26361050v1" target="_blank" rel="noopener"><em>A high-resolution human pangenome structural variant resource for improved disease association</em></a>. Jiadong Lin, Jonas A. Gustafson and colleagues; corresponding authors Danny E. Miller and Evan E. Eichler.</p><p>The manuscript combines near-complete assemblies with additional ONT genomes to construct a population insertion/deletion catalog and demonstrates rare-SV prioritization, gene-expression analysis and biobank association applications.</p>${heading(
            'citation',
            'Citing and reproducing the work')}<p>Use the publication information linked from the ${ext(
            repo,
            'study repository')} for the current paper citation. Cite the individual software and underlying data releases as required by their authors. A publication DOI is not inferred from the local manuscript filename.</p>${heading(
            'scope',
            'Guide scope and provenance')}<p>Counts, study settings and workflow descriptions derive from the supplied manuscript <em>Manuscript-0824-final.docx</em>. Commands labeled as examples are illustrative starting points, not an executed end-to-end pipeline. Consult the versioned study workflows for platform-specific configurations.</p><p>The abstract reports 232,090 All of Us samples while the targeted-genotyping Methods report 232,089. This guide avoids presenting either as a reconciled analysis denominator; use the final release documentation for exact sample counts.</p>${heading(
            'community',
            'Questions and contributions')}<p>${ext(
            repo + '/issues',
            'Discuss a workflow or report an issue')} in the project repository. Include the reference build, tool versions, expected behavior and a minimal example when reporting a computational problem.</p><p>Documentation layout inspired by ${ext(
            'https://fiberseq.github.io/',
            'the computational guide to Fiber-seq')}. This site uses original text and styling.</p>`
    }
];

// The homepage is the workflow map; each stage opens its own guide.
const stage = (id, num, title, text,
               tools) => '<a class="workflow-stage" href="#' + id + '"><span class="stage-number">' + num + '</span><div><h3>' + title + '</h3><p>' + text + '</p><small>' + tools + '</small></div><span class="stage-open" aria-hidden="true">↗</span></a>';
const overview = pages.find(
    p => p.id === 'overview');
overview.title = 'Workflow overview';
overview.search += ' flowchart homepage navigation';
overview.body = () => '<div class="eyebrow">1000 Genomes Project · Long-read SV resource</div><h1>From genome discovery<br>to pangenome applications.</h1>' + heading(
    'workflow-map',
    'Explore the workflow') + '<p class="lead workflow-intro">Follow the workflow below. Select a stage for its methods, input requirements and tutorial.</p><div class="workflow-map" aria-label="Structural variant analysis flowchart"><div class="workflow-input">Long-read genomes <span>HGSVC · HPRC · UW-ONT · BI-ONT</span></div><div class="workflow-connector" aria-hidden="true">↓</div>' + stage(
    'long-reads', '01',
    'Per-genome SV discovery',
    'Discover sequence-resolved alleles from assemblies and long-read alignments.',
    'PAV and complementary callers · Truvari within-sample collapse · BoostSV evaluation') + '<div class="workflow-connector" aria-hidden="true">↓</div>' + stage(
    'integration', '02',
    'Population integration',
    'Combine per-genome alleles into a nonredundant population catalog with callability-aware genotypes and allele frequencies.',
    'Truvari cross-sample integration · BoostSV representative selection · BCFtools') + '<div class="workflow-catalog"><b>Population INS/DEL catalogs</b><span>T2T-CHM13: 614,522 SVs &nbsp; · &nbsp; GRCh38: 587,779 SVs</span></div><div class="workflow-branch-label">APPLY THE RESOURCE TO NEW DATA</div><div class="workflow-branches"><div><div class="workflow-connector" aria-hidden="true">↓</div>' + stage(
    'rare-svs', '03A',
    'Enrich rare SV',
    'Compare newly discovered long-read SVs with the population catalog, then annotate and review rare candidates.',
    'Truvari comparison · rareSVpool · functional annotation · IGV') + '</div><div><div class="workflow-connector" aria-hidden="true">↓</div>' + stage(
    'targeted', '03B',
    'Targeted genotyping',
    'Measure known alleles at selected loci using a compatible haplotype panel and new sequencing data.',
    'Locityper · locus-specific validation · downstream association testing') + '</div></div></div><div class="note">Discovery establishes alleles; genotyping measures known alleles in new samples. BoostSV evaluates breakpoint evidence and Truvari compares or collapses alleles. Neither replaces a read-based genotyper.</div>' + heading(
    'additional-guides',
    'Additional guides') + '<div class="actions"><a class="button secondary" href="#short-reads">Genome-wide short-read genotyping →</a><a class="button secondary" href="#workflows">Detailed tool flowcharts →</a><a class="button secondary" href="#resources">Data & software ↗</a></div><p>PanGenie requires a phased panel with SVs, SNVs and indels from the same haplotypes. The integrated SV-only catalog is not a complete PanGenie panel.</p>';
pages.find(
    p => p.id === 'long-reads').title = 'Per-genome SV discovery';
pages.find(
    p => p.id === 'long-reads').group = 'WORKFLOW GUIDES';
pages.find(
    p => p.id === 'rare-svs').title = 'Enrich rare SV';
pages.find(
    p => p.id === 'rare-svs').group = 'WORKFLOW GUIDES';
const integration = {
    id: 'integration',
    title: 'Population integration',
    group: 'WORKFLOW GUIDES',
    search: 'merge collapse population catalog Truvari BoostSV allele frequency callability',
    body: () => '<div class="eyebrow">Workflow guide 02</div><h1>Build the population<br>SV catalog.</h1><p class="lead">Integrate per-genome discovery results while preserving allele diversity, sample provenance and callable-region evidence.</p>' + heading(
        'integration-inputs',
        'Inputs and outputs') + '<p><b>Inputs:</b> supported, sequence-resolved per-genome SV calls, breakpoint evaluation scores, callable regions for each haplotype and a shared reference FASTA. <b>Outputs:</b> a nonredundant insertion/deletion catalog with per-sample genotypes, allele frequencies and source annotations.</p>' + flow(
        'POPULATION INTEGRATION',
        [['Per-genome calls', 'Same reference and consistent representation'], ['Collapse alleles', 'Truvari · 90% sequence / size · 500 bp'], ['Choose best allele', 'Highest BoostSV score'], ['Assign GTs and AF', 'Callable regions · BCFtools']]) + heading(
        'integration-procedure',
        'Step-by-step integration') + steps(
        [['Prepare per-genome evidence', 'Complete discovery and within-sample collapse first. Keep the per-sample breakpoint, allele sequence, genotype, score and callable-region information. Do not mix GRCh38 and T2T-CHM13 coordinates.'], ['Restrict to the integration scope', 'The manuscript integrates insertions and deletions from 50 bp to 100 kbp. Inversion and large segmental-duplication analyses are separate components. Record which genomes pass the study coverage and read-length selection.'], ['Collapse equivalent alleles across samples', 'The study uses Truvari v5.2.0 with --pctseq 0.90, --pctsize 0.90, --refdist 500 and --keep common. This differs from the 80% / 1 kbp within-sample settings. Sequence and length similarity help distinguish related alleles at repeat loci.'], ['Select a representative for each collapsed site', 'Use the highest BoostSV score to choose the representative allele described in the manuscript. Preserve sample-specific breakpoint position in FORMAT/APOS and length in FORMAT/AL.'], ['Resolve missing genotypes using callability', 'Assembly-to-reference alignments define HGSVC/HPRC and UW-ONT callable regions via PAV. BI-ONT uses phased read evidence per haplotype. Assign reference alleles only where callable; retain partial or fully missing genotypes where evidence is insufficient.'], ['Compute and inspect population statistics', 'The study uses BCFtools v1.16 fill-tags for allele statistics. Check called allele denominators, missingness and ancestry composition. Keep reference-build identity and release provenance alongside the final VCF.']]) + heading(
        'integration-settings',
        'Study parameter summary') + '<table><thead><tr><th>Operation</th><th>Sequence / size similarity</th><th>Breakpoint distance</th></tr></thead><tbody><tr><td>Within-sample collapse</td><td>80% / 80%</td><td>1,000 bp</td></tr><tr><td>Population integration</td><td>90% / 90%</td><td>500 bp</td></tr></tbody></table><p>These are manuscript settings, not universal defaults. Check the versioned workflow for exact ordering and cohort-specific filters.</p>' + heading(
        'integration-checks',
        'Checks before release') + '<p>Inspect repeat-associated merges, genotype missingness and Mendelian consistency where pedigrees are available. A missing genotype represents insufficient confident evidence; it must not automatically become homozygous reference.</p><p>' + ext(
        repo,
        'Study integration workflows') + ' · <a href="#resources">Access the released catalogs →</a></p>'
};
const targeted = {
    id: 'targeted',
    title: 'Targeted genotyping',
    group: 'WORKFLOW GUIDES',
    search: 'Locityper targeted genotype haplotype panel short long read known allele',
    body: () => '<div class="eyebrow">Workflow guide 03B</div><h1>Genotype known alleles<br>at selected loci.</h1><p class="lead">Use a locus-specific haplotype panel to measure represented alleles in new samples. The manuscript demonstrates Locityper in short-read biobank genomes.</p>' + heading(
        'targeted-inputs',
        'Inputs and outputs') + '<p><b>Inputs:</b> selected loci, a reference-matched haplotype panel and new sequencing data supported by the chosen tool. <b>Outputs:</b> sample-level haplotype or genotype assignments, quality information and locus-specific validation results.</p>' + flow(
        'KNOWN-ALLELE GENOTYPING',
        [['Prepare locus panel', 'VCF or anchored multi-FASTA'], ['Validate each target', 'Leave-one-out in matched samples'], ['Genotype new reads', 'Locityper'], ['Inspect and analyze', 'Quality · missingness · association']]) + heading(
        'targeted-tutorial',
        'Targeted genotyping tutorial') + steps(
        [['Choose the locus and its allele representation', 'Use a VCF-based database for biallelic SV targets. For multiallelic loci, extract haplotype sequences between unique flanking anchors into a multi-FASTA panel. Verify reference identity, target boundaries and haplotype names.'], ['Prepare the reference database and sample reads', 'Follow the version-matched Locityper target-preparation and read-preprocessing instructions. The study uses Locityper v1.4.5. Use the upstream runnable examples rather than treating an SV catalog as a finished locus database.'], ['Validate with matched genomes', 'Leave the query sample out of the reference panel when evaluating known genomes. The study uses matched 1KGP short-read data and retains targets with F1 ≥0.8. Validate each locus separately and inspect performance in complex sequence.'], ['Genotype new samples', 'Run the supported Locityper workflow on the validated targets. Inspect genotype quality, missingness, read evidence and unexpected allele assignments before downstream use.'], ['Apply the appropriate downstream analysis', 'For association studies, account for ancestry, relatedness, phenotype definitions and multiple testing. Compare nearby SNP signals and fine-map to assess whether the SV explains the association.']]) + heading(
        'targeted-platforms',
        'Short reads and long reads') + '<p>Locityper supports short- and long-read whole-genome sequencing; the manuscript application here uses short reads. For long-read known-site genotyping, the study also uses Kanpig with PMDV-phased BI-ONT BAMs and removes phasing conflicts. These are distinct workflows with their own inputs and validation needs.</p>' + heading(
        'targeted-scope',
        'Targeted versus genome-wide analysis') + '<p>For genome-wide short-read genotyping, use the <a href="#short-reads">PanGenie tutorial</a> and its phased SV + SNV + indel panel requirements. Targeted and genome-wide panels are not interchangeable. Neither route discovers every allele absent from its reference panel.</p><p>' + ext(
        'https://locityper.vercel.app/',
        'Locityper instructions and examples') + ' · ' + ext(
        'https://github.com/EichlerLab/AoU_WDL',
        'Study genotyping and association workflows') + '</p>'
};
pages.push(integration, targeted);
const order = ['overview', 'start', 'long-reads', 'integration', 'rare-svs', 'targeted', 'short-reads', 'workflows', 'resources', 'about'];
pages.sort((a, b) => order.indexOf(
    a.id) - order.indexOf(b.id));
pages.find(
    p => p.id === 'short-reads').group = 'ADDITIONAL GUIDES';
pages.find(
    p => p.id === 'workflows').group = 'ADDITIONAL GUIDES';


// Workflow guides emphasize diagrams and tool roles.
const toolTable = rows => '<div class="tool-table"><table><thead><tr><th>Tool/Resource</th><th>Role in this workflow</th><th>Output / key setting</th></tr></thead><tbody>' + rows.map(
    ([name, role, output, url]) => '<tr><td>' + (url ? ext(
        url,
        name) : name) + '</td><td>' + role + '</td><td>' + output + '</td></tr>')
    .join(
        '') + '</tbody></table></div>';
const guide = (label, title, intro,
               diagram, rows,
               note) => '<div class="eyebrow">' + label + '</div><h1>' + title + '</h1><p class="lead">' + intro + '</p>' + heading(
    'core-flow',
    'Core workflow') + diagram + heading(
    'used-tools',
    'Tools and related resource') + toolTable(
    rows) + (note ? '<div class="note">' + note + '</div>' : '');
pages.find(
    p => p.id === 'long-reads').body = () => guide(
    'Workflow guide 01',
    'Per-genome SV discovery',
    'Input: long reads, a matching reference and optional haplotype assemblies. Output: supported per-genome SVs.',
    flow('ASSEMBLY-SUPPORTED ROUTE',
        [['Haplotype assemblies', 'HGSVC / HPRC; UW-ONT dual assemblies'], ['Discover alleles', 'PAV · SVIM-asm · dipcall'], ['Combine evidence', 'Read-caller support · Truvari'], ['Assess breakpoints', 'BoostSV']]) +
    flow(
        'READ-ONLY ROUTE · BI-ONT / UDN',
        [['ONT reads', 'minimap2 alignment'], ['Discover SVs', 'cuteSV · Sniffles · DELLY · DeBreak'], ['Retain supported calls', 'At least two callers'], ['Phasing', 'PMDV · Kanpig (BI-ONT)']]),
    [
        ['minimap2 / pbmm2', 'Align ONT / HiFi reads to the matching reference.', 'Indexed read alignments', repo],
        ['PAV · SVIM-asm · dipcall', 'Discover alleles from genome assemblies.', 'Assembly-based SV calls; prioritize PAV representation', repo],
        ['Read-based callers', 'cuteSV, Sniffles, DELLY and DeBreak form the four-caller ONT route. Other study callers include pbsv, sawfish and NanoVar where applicable.', 'BI-ONT / UDN: retain ≥2-caller support', repo],
        ['Truvari v5.2.0', 'Collapse redundant calls within a sample.', '80% sequence / size similarity; 1 kbp distance', repo],
        ['BoostSV', 'Evaluate breakpoint alignment ambiguity.', 'Breakpoint evidence score', 'https://github.com/jiadong324/BoostSV'],
        ['PMDV + Kanpig v1.1.0', 'Phase BI-ONT reads and assign phased SV genotypes.', 'Exclude conflicting phasing', repo]
    ],
    'The BI-ONT phasing stage is not part of the UDN read-only discovery route. Callers vary by platform; BoostSV evaluates evidence, not pathogenicity.');
pages.find(
    p => p.id === 'integration').body = () => guide(
    'Workflow guide 02',
    'Population integration',
    'Input: per-genome calls and callable regions on a shared reference. Output: a nonredundant population INS/DEL catalog.',
    flow(
        'CROSS-SAMPLE ALLELE INTEGRATION',
        [['Per-genome calls', 'Sequence-resolved INS/DEL · 50 bp–100 kbp'], ['Collapse alleles', 'Truvari · 90% sequence / size · 500 bp'], ['Choose best allele', 'Highest BoostSV score'], ['Population catalog', 'Callability-aware genotypes · allele frequencies']]),
    [
        ['PAV', 'Define callable regions from assembly alignments in HGSVC/HPRC and UW-ONT.', 'Per-haplotype callable intervals', repo],
        ['PMDV + BEDTools', 'Define BI-ONT callable intervals from phased read evidence.', 'Per-haplotype callable intervals', repo],
        ['Truvari v5.2.0', 'Collapse similar alleles across genomes.', '--pctseq 0.90 · --pctsize 0.90 · --refdist 500 · --keep common', repo],
        ['BoostSV', 'Provide scores for representative allele selection.', 'Retain highest-scoring representative; preserve sample APOS / AL', 'https://github.com/jiadong324/BoostSV'],
        ['BCFtools v1.16', 'Calculate allele statistics after genotype assignment.', 'fill-tags: allele frequency and related statistics', repo]
    ],
    '<b>Current limitation:</b> The reference panel is not re-genotyped. The missing genotype suggests lack of confident alignment (assembly or reads).<br>Assign reference genotypes only where supported by callable regions. Missing evidence is not homozygous reference. T2T-CHM13: 614,522 SVs; GRCh38: 587,779 SVs.');
pages.find(
    p => p.id === 'rare-svs').body = () => guide(
    'Workflow guide 03A',
    'Enrich rare SV',
    'Input: new long-read SV calls and the matching population catalog. Output: rare candidates supported by read and functional evidence.',
    flow('POPULATION COMPARISON',
        [['New sample SVs', 'ONT discovery · ≥2-caller support'], ['Compare alleles', 'Truvari + GRCh38 population catalog'], ['Select rare candidates', 'rareSVpool · unique to one proband']]) +
    flow('CANDIDATE PRIORITIZATION',
        [['Functional annotation', 'comREG / AnnotSV · alternative: needLR'], ['Disease relevance', 'OMIM-associated genes'], ['Evidence review', 'IGV · repeat context · population tracks']]),
    [
        ['cuteSV · Sniffles · DELLY · DeBreak', 'Discover SVs in the study UDN read-only route.', 'Retain calls supported by ≥2 callers', repo],
        ['Truvari v5.2.0', 'Jointly compare calls with the 1,218-genome GRCh38 catalog.', '90% sequence / size similarity; 500 bp distance', repo],
        ['rareSVpool / asap v1.1.0', 'Select UDN-only variants absent from the catalog.', 'Study selection: unique to one proband', 'https://github.com/EichlerLab/asap'],
        ['comREG / AnnotSV', 'Annotate functional context and gene overlap.', 'CDS / UTR candidates; regulatory candidates restricted to promoters', 'https://github.com/EichlerLab/asap'],
        ['needLR (alternative)', 'Annotate and prioritize long-read SVs using population frequencies, genomic context and gene–phenotype associations.', 'Alternative annotation route; check reference-build and release compatibility', 'https://github.com/millerlaboratory/needLR'],
        ['IGV', 'Inspect variant support and population context, especially repeats.', 'Exclude ambiguous lengths and problematic variable-repeat calls', repo]
    ],
    'The study uses the 587,779-SV GRCh38 catalog. Absence from the catalog supports prioritization; it does not establish pathogenicity.');
pages.find(
    p => p.id === 'targeted').body = () => guide(
    'Workflow guide 03B',
    'Targeted genotyping',
    'Input: selected loci, a compatible haplotype panel and new reads. Output: genotypes at known panel alleles.',
    flow(
        'LOCITYPER · STUDY SHORT-READ APPLICATION',
        [['Build locus panel', 'Biallelic: VCF · multiallelic: anchored multi-FASTA'], ['Validate each target', 'Matched samples · leave-one-out · F1 ≥0.8'], ['Genotype new samples', 'Locityper · quality and missingness checks'], ['Analyze associations', 'PLINK2 · fine-mapping']]),
    [
        ['Locityper v1.4.5', 'Build locus-specific reference databases and genotype represented haplotypes.', 'Known-allele genotypes; validate each locus', 'https://locityper.vercel.app/'],
        ['Locityper leave-one-out', 'Evaluate targets using matched 1KGP short-read samples.', 'Study selection: F1 ≥0.8', 'https://locityper.vercel.app/'],
        ['PMDV + Kanpig v1.1.0', 'Separate long-read known-site route used for BI-ONT.', 'Phased SV genotypes; exclude phasing conflicts', repo],
        ['PLINK2', 'Test genotype–phenotype associations after sample and genotype QC.', 'Study uses Firth regression with covariates', 'https://github.com/EichlerLab/AoU_WDL'],
        ['susieR', 'Fine-map SV and nearby SNP association signals.', 'Credible sets and posterior inclusion probabilities', 'https://github.com/EichlerLab/AoU_WDL']
    ],
    'The study Locityper application uses short reads; Locityper also supports long reads. For genome-wide short-read panel genotyping, see the <a href="#short-reads">PanGenie guide</a>. Panel genotyping does not discover unrepresented alleles.');


// Genotyping connects the reference panel to expression and biobank analyses.
const genotyping = pages.find(
    p => p.id === 'targeted');
genotyping.title = 'Genotyping';
genotyping.search += ' PanGenie eQTL Locityper PheWAS biobank';
genotyping.body = () => '<div class="eyebrow">Workflow guide 03B</div><h1>Genotyping</h1><p class="lead">Bring known pangenome alleles into new cohorts: PanGenie for genome-wide genotyping in eQTL studies, or Locityper for targeted genotyping in biobank PheWAS.</p>' + heading(
    'pangenie-eqtl',
    'PanGenie genotyping for eQTL studies') + flow(
    'SHORT READS + PHASED HAPLOTYPE PANEL',
    [['Prepare panel', 'SVs + SNVs + indels on the same haplotypes'], ['Genotype short reads', 'PanGenie · genotype QC'], ['Match expression data', 'RNA-seq · sample alignment · covariates'], ['Map cis-eQTLs', 'PLINK2 · tensorQTL · fine-mapping']]) + toolTable(
    [
        ['PanGenie', 'Genotype known alleles from short-read k-mers and phased reference haplotypes.', 'Genome-wide genotypes; evaluate with leave-one-out samples', 'https://github.com/eblerjana/pangenie'],
        ['PLINK2', 'Prepare genotype data for expression association analysis.', 'QC genotypes and matched sample identifiers', 'https://github.com/jiadong324/1KG_LongRead_SV'],
        ['tensorQTL', 'Test cis associations with matched gene expression and covariates.', 'Study eQTL settings: MAF ≥0.05; sex, 5 genotype PCs, 60 PEER factors; eGene q <0.05', repo],
        ['CAVIAR', 'Fine-map SV and SNP expression signals using association statistics and LD.', 'Posterior probabilities for candidate causal variants', repo]
    ]) + '<div class="note">PanGenie → eQTL is a workflow for short-read studies. The manuscript’s reported eQTL analysis uses long-read SV genotypes in 731 samples with matched MAGE RNA-seq. Its separate PanGenie analysis genotypes 3,202 short-read genomes. The SV-only catalog is not a complete PanGenie reference panel.</div>' + heading(
    'locityper-phewas',
    'Locityper targeted genotyping') + flow(
    'LOCUS HAPLOTYPES + BIOBANK READS',
    [['Build target panel', 'Biallelic VCF / multiallelic multi-FASTA'], ['Validate targets', 'Matched 1KGP · leave-one-out · F1 ≥0.8'], ['Genotype biobank', 'Locityper · quality and missingness'], ['Ready for PheWAS', 'Validated genotypes + quality information']]) + toolTable(
    [
        ['Locityper v1.4.5', 'Create locus references and genotype known haplotypes in biobank genomes.', 'Study application: short-read All of Us genomes', 'https://locityper.vercel.app/'],
        ['Locityper leave-one-out', 'Evaluate each target in matched 1KGP short-read samples.', 'Study target selection: F1 ≥0.8', 'https://locityper.vercel.app/'],
    ]) + '<div class="actions"><a class="button" href="#phewas">Biobank PheWAS workflow →</a></div><div class="note">Known-allele genotyping does not discover unrepresented alleles. For phased long-read genotyping, the study BI-ONT workflow uses PMDV + Kanpig and excludes phasing conflicts.</div>';
const phewas = {
    id: 'phewas',
    title: 'Biobank PheWAS',
    group: 'WORKFLOW GUIDES',
    search: 'PheWAS biobank All of Us phenotype ICD phecode Firth PLINK2 susieR fine mapping',
    body: () => guide(
        'Workflow guide 04',
        'Biobank PheWAS',
        'Input: validated SV genotypes, EHR-derived phenotypes and covariates. Output: SV–phenotype associations and fine-mapped signals.',
        flow('PREPARE THE ANALYSIS',
            [['SV genotype input', 'Validated genotypes from the genotyping workflow'], ['Sample and genotype QC', 'Inspect quality · remove related samples'], ['Construct phenotypes', 'ICD-10 → phecodes · cases / controls'], ['Align samples', 'Genotypes + phenotypes + covariates']]) +
        flow(
            'ASSOCIATION AND FINE-MAPPING',
            [['Test each SV–phenotype pair', 'PLINK2 Firth regression'], ['Filter and correct', 'Sample / case counts · multiple testing'], ['Inspect association patterns', 'PheTK visualization'], ['Compare nearby SNPs', 'LD + susieR fine-mapping']]),
        [
            ['Phecode mapping + phenotype preparation', 'Convert EHR ICD-10 records to phecodes and define cases and controls.', 'Study: ≥2 occurrences = case; zero = control; exclude phenotypes with <20 cases', 'https://github.com/EichlerLab/AoU_WDL/tree/main/plink_phewas'],
            ['PLINK2', 'Run Firth logistic regression with age, sex and ancestry covariates.', 'Study: age + sex + PC1–PC10; exclude related samples', 'https://github.com/EichlerLab/AoU_WDL/tree/main/plink_phewas'],
            ['Association QC', 'Retain tests with sufficient observations and variant-carrying cases; control multiple testing.', 'Study reporting: ≥200,000 observations and ≥5 variant-carrying cases; define the correction for the tested hypothesis set', 'https://github.com/EichlerLab/AoU_WDL/tree/main/plink_phewas'],
            ['PheTK v0.2.12', 'Visualize association results by phecode category.', 'Phenome-wide association plots', 'https://github.com/nhgritctran/PheTK'],
            ['BCFtools + PLINK2', 'Prepare flanking SNPs and compare SNP / SV signals.', 'Study fine-mapping: ±100 kbp; allele count ≥100; phenotype case count ≥5', 'https://github.com/EichlerLab/AoU_WDL/tree/main/susie'],
            ['susieR', 'Fine-map the SV jointly with nearby SNPs and covariates.', 'Credible sets and PIP; assess leading or independent signals', 'https://github.com/EichlerLab/AoU_WDL/tree/main/susie']
        ],
        'Thresholds describe the manuscript’s All of Us analysis, not universal biobank defaults. Match effect-allele coding and sample sets, account for multiple testing, and compare nearby SNPs before interpreting an SV as the driver. Association alone does not establish causality.')
};
pages.splice(pages.findIndex(
    p => p.id === 'targeted') + 1, 0,
    phewas);
const previousOverview = overview.body;
overview.body = () => previousOverview()
    .replace('Targeted genotyping</h3>',
        'Genotyping</h3>').replace(
        'Measure known alleles at selected loci using a compatible haplotype panel and new sequencing data.',
        'PanGenie genotyping for eQTL studies; Locityper targeted genotyping for biobank PheWAS.')
    .replace(
        'Locityper · locus-specific validation · downstream association testing',
        'PanGenie → eQTL · Locityper → PheWAS')
    .replace(
        '<div class="note">Discovery establishes',
        '<div class="workflow-connector" aria-hidden="true">↓</div>' + stage(
            'phewas', '04',
            'Biobank PheWAS',
            'Test SV–phenotype associations using biobank genotypes, EHR-derived phenotypes and covariates.',
            'PLINK2 Firth regression · PheTK · SNP comparison · susieR fine-mapping') + '<div class="note">Discovery establishes');
// Keep legacy #targeted links working while exposing the requested section name.


const integrationGuide = pages.find(
    p => p.id === 'integration');
const integratedBody = integrationGuide.body;
integrationGuide.search += ' stratification selection Fst ancestry SNPRelate selscan Tajima';
integrationGuide.body = () => integratedBody() + heading(
    'sv-stratification-selection',
    'SV stratification and selection') + flow(
    'ANCESTRY STRATIFICATION', [
        ['Assign ancestry groups', 'PCLAI-labeled centroids · first 3 SNP PCs'], ['Measure differentiation', 'VCFtools · each C1–C4 group vs the rest'], ['Retain stratified SVs', 'Allele count ≥10 · Fst ≥0.15']
    ]) + flow(
    'SELECTION SIGNALS IN FLANKING HAPLOTYPES',
    [
        ['Prepare biallelic SNVs', '281 unrelated assembly-based individuals · autosomes'], ['Scan selection statistics', 'selscan: iHS / iHH12 / nSL · VCF-kit: Tajima’s D'], ['Rank candidate windows', 'Top 1% windows by the study definitions'], ['Intersect SVs', 'Assign highest-ranking overlapping window']
    ]) + toolTable([
    ['PCLAI labels + SNPRelate', 'Define C1–C4 ancestry centroids from HGSVC/HPRC samples using the first three SNP PCs; assign other samples to the nearest centroid by Euclidean distance.', 'C1: African; C2: East Asian / Indigenous American; C3: European; C4: South Asian. Exclude samples without assigned PCLAI labels.', repo],
    ['VCFtools v0.1.17', 'Calculate per-site Fst for each group against all remaining samples.', 'Report stratified SVs with allele count ≥10; study Results use Fst ≥0.15.', repo],
    ['selscan v2.1.2', 'Calculate iHS, iHH12 and nSL in populations with ≥10 individuals, using chimpanzee-polarized biallelic SNVs.', 'iHS / iHH12 use the Lalli et al. recombination map; all three scans are restricted to map-covered regions.', repo],
    ['Haplotype-score window ranking', 'Rank 100 kbp windows by the fraction of SNVs in the genome-wide top 1% of |iHS|, |nSL| or iHH12.', 'Retain the top 1% of windows for each statistic.', repo],
    ['VCF-kit v0.2.9', 'Calculate Tajima’s D in 20 kbp windows stepped every 5 kbp.', 'Rank windows using the study definition; retain the top 1% and classify SVs by their highest-ranking overlapping window.', repo]
]) + '<div class="note">Stratification and selection are distinct analyses. Selection signals come from SNV-based regional scans, then intersect SVs; population differentiation alone does not establish selection. Demographic effects can contribute to these signals.</div>';
const benchmarks = {
    id: 'benchmarks',
    title: 'SV benchmarks',
    group: 'ADDITIONAL GUIDES',
    search: 'benchmark linear graph Truvari Aardvark HG002 Q100 HGSVC HPRC minigraph cactus comparison',
    body: () => '<div class="eyebrow">Additional guide · Validation and comparison</div><h1>SV benchmarks</h1><p class="lead">Compare per-genome calls with matched benchmark samples, and compare the integrated linear-reference catalog with graph-derived alleles.</p>' + heading(
        'linear-comparison',
        'Comparison with the linear callset') + flow(
        'MATCHED-SAMPLE BENCHMARKING', [
            ['Prepare sample calls', 'BCFtools · extract non-reference alleles'], ['Match truth and regions', 'HG002 Q100 / HGSVC · confident regions'], ['Compare calls', 'Truvari v5.2.0 · Aardvark v0.10.5'], ['Assess performance', 'Precision · recall · F1']
        ]) + toolTable([
        ['HG002 Q100 benchmark', 'Use the Q100 v5.0q callset as truth for matched HG002 comparisons.', 'Confident regions: _stvar.benchmark.bed; use the release’s recommended Truvari settings.', 'https://ftp-trace.ncbi.nlm.nih.gov/ReferenceSamples/giab/release/AshkenazimTrio/HG002_NA24385_son/v5.0q/'],
        ['HGSVC integrated benchmark', 'Use HGSVC release Variant_Calls/1.0 for matched samples.', 'Confident regions: sample-specific dipcall high-confidence BEDs.', 'https://ftp.1000genomes.ebi.ac.uk/vol1/ftp/data_collections/HGSVC/release/Variant_Calls/1.0/'],
        ['BCFtools', 'Extract per-sample non-reference SVs from integrated callsets.', 'Align sample identity and reference build before comparison.', repo],
        ['Truvari v5.2.0', 'Evaluate per-sample discovery against the matched truth set and confident regions.', 'Use the settings recommended by the Q100 benchmark README, as described in Methods.', repo],
        ['Aardvark v0.10.5', 'Provide a complementary SV comparison against the same truth sets.', 'Default parameters with the corresponding confident-region inputs.', repo],
        ['Additional HPRC linear callset', 'Evaluate the published Yale HPRC R2 linear-reference calls alongside this study’s calls.', 'Matched samples and the same benchmark framework.', 'https://human-pangenomics.s3.amazonaws.com/index.html?prefix=submissions/40399FDD-59DE-43D1-B3A3-DFF0C6E64FAC--YALE_VARIANT_CALLS_R2/samples/'],
        ['ONT cohort evaluation', 'Use this study’s calls from matched HPRC/HGSVC samples as truth for ONT cohort calls.', 'Truvari with the same benchmark settings; also evaluate the public BI-ONT pseudo-haplotype graph calls.', repo]
    ]) + heading('graph-comparison',
        'Comparison with the graph callset') + flow(
        'ALLELE-LEVEL CALLSET COMPARISON',
        [
            ['Choose graph queries', 'BI-ONT: 1,019 genomes · HPRC: 232 assemblies'], ['Normalize representation', 'BCFtools · biallelic alleles · ≥50 bp'], ['Compare with study catalog', 'Truvari · one-to-one / one-to-multi'], ['Summarize matches', 'Distinguish matching modes and allele representation']
        ]) + toolTable([
        ['Graph query callsets', 'Schloissnig et al.: 1,019 genomes; Lucas et al.: HPRC minigraph-cactus from 232 near-T2T assemblies.', 'Use this study’s linear-reference callset as the comparison reference.', repo],
        ['BCFtools norm / view / index', 'Split multiallelic records, normalize against the matching FASTA, retain allele length differences ≥50 bp, and index the result.', 'norm -m -any; filter abs(strlen(REF)-strlen(ALT)) ≥50.', repo],
        ['Truvari: one-to-one', 'Allow one query allele to match one reference allele.', 'bench --pick ac -r 2000 -C 5000', repo],
        ['Truvari: one-to-multi', 'Allow multiple query alleles to match one reference allele.', 'bench --pick multi -r 2000 -C 5000', repo]
    ]) + '<div class="note">In graph-callset comparison, “reference” denotes the comparison baseline, not an independent truth set. Keep reference FASTA, normalized allele representations and matching mode consistent when interpreting results.</div>'
};
pages.splice(pages.findIndex(
    p => p.id === 'workflows') + 1, 0,
    benchmarks);
const overviewWithApplications = overview.body;
overview.body = () => overviewWithApplications()
    .replace(
        '<a class="button secondary" href="#resources">Data & software ↗</a>',
        '<a class="button secondary" href="#benchmarks">SV benchmarks →</a><a class="button secondary" href="#resources">Data & software ↗</a>');

const atlasPage = pages.find(
    p => p.id === 'workflows');
atlasPage.group = 'GETTING STARTED';
pages.splice(pages.indexOf(atlasPage),
    1);
pages.splice(pages.findIndex(
    p => p.id === 'start') + 1, 0,
    atlasPage);

const largeEffect = {
    id: 'large-effect',
    title: 'Large effect SV',
    group: 'WORKFLOW GUIDES',
    search: 'large effect functional annotation stratification eQTL Locityper biobank phewas',
    body: () => guide(
        'Application · Large effect SV',
        'Large effect SV',
        'Assess population stratification, functional annotations and expression associations to prioritize SVs for biobank studies.',
        flow(
            'ASSESS AND PRIORITIZE SVs',
            [
                ['Population catalog', 'Sequence-resolved SV alleles'], ['Evaluate evidence', 'Stratification · functional annotation · eQTL'], ['Prioritize SVs', 'Select candidates for biobank testing']
            ]) + flow(
            'TEST IN BIOBANKS', [
                ['Prepare target haplotypes', 'Reference panel for selected SVs'], ['Genotype biobank samples', 'Locityper · target validation'], ['PheWAS', 'Test SV–phenotype associations'], ['Fine-map signals', 'Compare SVs with nearby SNPs']
            ]), [
            ['VCFtools / selection scans', 'Assess population differentiation and regional selection evidence.', 'See <a href="#sv-stratification-selection">SV stratification and selection</a>.', repo],
            ['comREG / AnnotSV', 'Annotate coding, UTR and regulatory context.', 'Functional evidence for prioritizing targets.', 'https://github.com/EichlerLab/asap'],
            ['tensorQTL / CAVIAR', 'Evaluate expression associations and fine-map SV / SNP signals.', 'The manuscript eQTL analysis uses matched long-read SV genotypes and RNA-seq.', repo],
            ['Locityper', 'Genotype selected SVs in biobank genomes using validated target panels.', 'See the <a href="#targeted">Genotyping guide</a>.', 'https://locityper.vercel.app/'],
            ['PLINK2 / PheTK / susieR', 'Test, visualize and fine-map phenotype associations.', 'See <a href="#phewas">Biobank PheWAS</a>.', 'https://github.com/EichlerLab/AoU_WDL']
        ],
        'Stratification, functional annotation and eQTL are complementary evidence sources; they are not all required for every candidate. Prioritization does not itself establish a large biological effect or causality.')
};
pages.splice(pages.findIndex(
        p => p.id === 'targeted'), 0,
    largeEffect);
const overviewBeforeLargeEffect = overview.body;
overview.body = () => {
    let html = overviewBeforeLargeEffect();
    html = html.replace(
        /<a class="workflow-stage" href="#rare-svs">[\s\S]*?<\/a>/,
        stage('rare-svs', '03A',
            'Enrich rare SV',
            'Identify likely pathogenic SVs in probands by using the population catalogs as controls.',
            'Proband SVs → population comparison → rare candidates → annotation and evidence review'));
    html = html.replace(
        /<a class="workflow-stage" href="#targeted">[\s\S]*?<\/a>/,
        stage('large-effect', '03B',
            'Large effect SV',
            'Assess SV stratification, functional annotations and eQTL evidence to prioritize alleles for biobank studies.',
            'Population differentiation · functional context · expression associations') + '<div class="workflow-connector" aria-hidden="true">↓</div>' + stage(
            'targeted', '04',
            'Genotyping in biobank',
            'Genotype the selected large effect SVs with Locityper using validated target haplotype panels.',
            'Locityper · target validation · biobank genotypes') + '<div class="workflow-connector" aria-hidden="true">↓</div>' + stage(
            'phewas', '05',
            'Biobank PheWAS',
            'Test the genotyped SVs for phenotype associations and fine-map the resulting signals.',
            'PLINK2 Firth regression · PheTK · nearby SNPs · susieR'));
// Remove the former shared PheWAS continuation; it now belongs to the large-effect branch.
    const shared = '<div class="workflow-connector" aria-hidden="true">↓</div>' + stage(
        'phewas', '04',
        'Biobank PheWAS',
        'Test SV–phenotype associations using biobank genotypes, EHR-derived phenotypes and covariates.',
        'PLINK2 Firth regression · PheTK · SNP comparison · susieR fine-mapping');
    return html.replace(shared, '');
};


const overviewBeforeCompactLayout = overview.body;
overview.body = () => {
    const html = overviewBeforeCompactLayout();
    const branchStart = html.indexOf(
        '<div class="workflow-branches">');
    const noteStart = html.indexOf(
        '<div class="note">',
        branchStart);
    const lanes = '<div class="application-lanes"><div class="application-lane"><div class="lane-caption">RARE DISEASE ANALYSIS</div>' + stage(
        'rare-svs', '03A',
        'Enrich rare SV',
        'Identify likely pathogenic SVs in probands by using the population catalogs as controls.',
        'Proband SVs → population comparison → rare candidates → annotation and evidence review') + '</div><div class="application-lane"><div class="lane-caption">BIOBANK ANALYSIS</div><div class="biobank-lane">' + stage(
        'large-effect', '03B',
        'Large effect SV',
        'Assess stratification, functional annotations and eQTL evidence to prioritize alleles.',
        'Population differentiation · functional context · expression associations') + '<span class="lane-arrow" aria-hidden="true">→</span><div class="biobank-combined"><h3>Biobank genotyping &amp; PheWAS</h3><p>Genotype selected SVs with Locityper, test phenotype associations, and fine-map signals.</p><small>Locityper → PLINK2 · PheTK · susieR</small><div class="combined-links"><a href="#targeted">Genotyping guide ↗</a><a href="#phewas">PheWAS guide ↗</a></div></div></div></div></div>';
    return html.slice(0,
        branchStart) + lanes + '</div>' + html.slice(
        noteStart);
};


const studyPage = pages.find(
    p => p.id === 'about');
const oldStudyBody = studyPage.body;
const studyOnly = oldStudyBody()
    .slice(0, oldStudyBody()
        .indexOf('<h2 id="citation">'));
const paperTable = rows => '<div class="tool-table"><table><thead><tr><th>Paper</th><th>Study</th><th>Relevance</th></tr></thead><tbody>' + rows.map(
    ([title, authors, publication, summary, url]) => '<tr><td>' + ext(
        url,
        title) + '</td><td>' + authors + '<br><span class="muted">' + publication + '</span></td><td>' + summary + '</td></tr>')
    .join(
        '') + '</tbody></table></div>';
studyPage.search += ' related papers publications bibliography long short read';
studyPage.body = () => studyOnly + heading(
    '1kg-related-studies',
    '1KG related studies') + '<h3 id="long-read-studies">Long-read and assembly studies</h3>' + paperTable(
    [
        ['Multi-platform discovery of haplotype-resolved structural variation in human genomes', 'Chaisson et al.', 'Nature Communications (2019)', 'Multi-platform, haplotype-resolved SV discovery in human genomes.', 'https://doi.org/10.1038/s41467-018-08148-z'],
        ['Haplotype-resolved diverse human genomes and integrated analysis of structural variation', 'Ebert et al.', 'Science (2021)', 'Diverse phased genome assemblies and integrated SV analysis using PAV.', 'https://doi.org/10.1126/science.abf7117'],
        ['High-coverage nanopore sequencing of samples from the 1000 Genomes Project to build a comprehensive catalog of human genetic variation', 'Gustafson et al.', 'Genome Research (2024)', 'High-coverage ONT sequencing of 1KGP samples; foundation for the UW-ONT resource.', 'https://doi.org/10.1101/gr.279273.124'],
        ['Complex genetic variation in nearly complete human genomes', 'Logsdon et al.', 'Nature (2025)', 'HGSVC near-complete diploid assemblies and complex structural variation.', 'https://doi.org/10.1038/s41586-025-09140-6'],
        ['Structural variation in 1,019 diverse humans based on long-read sequencing', 'Schloissnig et al.', 'Nature (2025)', 'Population-scale long-read SV discovery with linear- and graph-based analyses.', 'https://doi.org/10.1038/s41586-025-09290-7']
    ]) + '<h3 id="short-read-studies">Short-read studies</h3>' + paperTable(
    [
        ['An integrated map of genetic variation from 1,092 human genomes', '1000 Genomes Project Consortium', 'Nature (2012)', 'Phase 1: integrated whole-genome, exome and genotype data across diverse populations.', 'https://doi.org/10.1038/nature11632'],
        ['A global reference for human genetic variation', '1000 Genomes Project Consortium', 'Nature (2015)', 'Phase 3 reference of population variation and phased haplotypes.', 'https://doi.org/10.1038/nature15393'],
        ['An integrated map of structural variation in 2,504 human genomes', 'Sudmant et al.', 'Nature (2015)', 'Short-read-led population SV discovery and genotyping, with complementary breakpoint evidence.', 'https://doi.org/10.1038/nature15394'],
        ['High-coverage whole-genome sequencing of the expanded 1000 Genomes Project cohort including 602 trios', 'Byrska-Bishop et al.', 'Cell (2022)', 'Expanded high-coverage short-read cohort for variant discovery, genotyping and pedigree evaluation.', 'https://www.cell.com/article/S0092867422009916/pdf']
    ]);


// Keep the large-effect assessment in the diagram without a separate page.
const largeEffectPageIndex = pages.findIndex(
    p => p.id === 'large-effect');
if (largeEffectPageIndex !== -1) pages.splice(
    largeEffectPageIndex, 1);
const overviewBeforeAcknowledgments = overview.body;
overview.body = () => {
    let html = overviewBeforeAcknowledgments();
    html = html.replace(
        /<a class="workflow-stage" href="#large-effect">([\s\S]*?)<\/a>/,
        (_,
         content) => '<div class="workflow-stage static-stage">' + content.replace(
            '<span class="stage-open" aria-hidden="true">↗</span>',
            '') + '</div>');
    html = html.replace(
        '<div class="note">Discovery establishes alleles; genotyping measures known alleles in new samples. BoostSV evaluates breakpoint evidence and Truvari compares or collapses alleles. Neither replaces a read-based genotyper.</div>',
        '');
    html = html.replace(
        '<p>PanGenie requires a phased panel with SVs, SNVs and indels from the same haplotypes. The integrated SV-only catalog is not a complete PanGenie panel.</p>',
        '');
    html = html.replace(
        'APPLY THE RESOURCE TO NEW DATA',
        'APPLY THE RESOURCE TO FIND ASSOCIATION');
    const acknowledgments = heading(
        'acknowledgments',
        'Acknowledgments') + '<p>We thank the participants, researchers and teams of the following consortia and programs for the data and resources that support this work.</p><ul class="acknowledgments"><li>' + ext(
        'https://humanpangenome.org/',
        'HPRC — Human Pangenome Reference Consortium') + '</li><li>' + ext(
        'https://www.internationalgenome.org/human-genome-structural-variation-consortium/',
        'HGSVC — Human Genome Structural Variation Consortium') + '</li><li>' + ext(
        'https://s3.amazonaws.com/1000g-ont/index.html?prefix=PROCESSED_DATA/',
        '1KG-LRSC — 1000 Genomes Long-Read Sequencing Consortium') + ' <span class="muted">(sequencing data)</span></li><li>' + ext(
        'https://www.nih.gov/allofus',
        'All of Us Research Program') + '</li></ul>';
    return html.replace(
        heading('additional-guides',
            'Additional guides'),
        acknowledgments + heading(
            'additional-guides',
            'Additional guides'));
};


const buildAnalysis = pages.find(
    p => p.id === 'start');
const analyticalAtlas = pages.find(
    p => p.id === 'workflows');
const chooseAnalysisContent = buildAnalysis.body();
const atlasAnalysisContent = analyticalAtlas.body();
buildAnalysis.title = 'Build your analysis';
buildAnalysis.search += ' workflow atlas analytical stage discovery integration genotyping';
buildAnalysis.body = () => '<div class="eyebrow">Getting started</div><h1>Build your analysis</h1>' + heading(
    'choose-analysis',
    'Choose your analysis') + chooseAnalysisContent.slice(
    chooseAnalysisContent.indexOf(
        '<p class="lead">')) + heading(
    'find-analytical-stage',
    'Find your analytical stage') + atlasAnalysisContent.slice(
    atlasAnalysisContent.indexOf(
        '<p class="lead">'));
pages.splice(
    pages.indexOf(analyticalAtlas), 1);

// Preserve old atlas bookmarks and links while presenting a single chapter.
function resolveChapterHash() {
    if (location.hash === '#workflows') history.replaceState(
        null, '', '#start');
}

resolveChapterHash();
window.addEventListener('hashchange',
    resolveChapterHash);
for (const page of pages) {
    const previousBody = page.body;
    page.body = () => previousBody()
        .replaceAll('href="#workflows"',
            'href="#find-analytical-stage"')
        .replaceAll(
            'Detailed tool flowcharts →',
            'Find your analytical stage →');
}


const buildAnalysisBeforeTrim = buildAnalysis.body;
buildAnalysis.body = () => buildAnalysisBeforeTrim()
    .replace(
        /<h2 id="outputs">What to retain<\/h2>\s*<p>[\s\S]*?<\/p>/,
        '')
    .replace(
        '<h2 id="choose">Which path fits your study?</h2>',
        '');


const analysisBeforeStageLayout = buildAnalysis.body;
buildAnalysis.body = () => {
    let html = analysisBeforeStageLayout();
    const summary = html.match(
        /<h2 id="roles">What does each tool contribute\?<\/h2>(<table>[\s\S]*?<\/table>)/);
    if (summary) {
        html = html.replace(summary[0],
            '');
        html = html.replace(
            '<h2 id="discovery">',
            '<h3 id="roles" class="analysis-subheading">Summary of different stage</h3>' + summary[1] + '<h2 id="discovery">');
    }
    for (const id of ['discovery', 'integration', 'genotyping']) html = html.replace(
        new RegExp(
            '<h2 id="' + id + '">([\\s\\S]*?)<\\/h2>'),
        '<h3 id="' + id + '" class="analysis-subheading">$1</h3>');
    return html;
};


const analysisBeforeIntroReorder = buildAnalysis.body;
buildAnalysis.body = () => {
    const html = analysisBeforeIntroReorder();
    const chooseStart = html.indexOf(
        '<h2 id="choose-analysis">');
    const prepareStart = html.indexOf(
        '<h2 id="prepare">');
    const stagesStart = html.indexOf(
        '<h2 id="find-analytical-stage">');
    if (chooseStart < 0 || prepareStart < 0 || stagesStart < 0) return html;
    return html.slice(0,
        chooseStart) + html.slice(
        prepareStart,
        stagesStart) + html.slice(
        chooseStart,
        prepareStart) + html.slice(
        stagesStart);
};


// Related study: published family-based application of pangenome SV controls.
const rareSvRelatedPage = pages.find(p => p.id === 'rare-svs');
const rareSvBeforeRelatedWorks = rareSvRelatedPage.body;
rareSvRelatedPage.body = () => rareSvBeforeRelatedWorks()
 + heading('rare-related-works', 'Related works')
 + '<article class="related-study"><h3>'+ext('https://doi.org/10.1038/s41467-026-68378-4','Using the linear references from the pangenome to discover missing autism variants')+'</h3>'
 + '<p class="study-citation">Sui, Y., Lin, J., Noyes, M. D. et al. <em>Nature Communications</em> 17, 1681 (2026).</p>'
 + '<p>The study analyzed 189 individuals from 51 unsolved families. Phased assemblies and complementary read-based calls enabled SV discovery; comparison with pangenome controls narrowed the search to rare family variants.</p>'
 + '<figure class="related-study-figure"><a href="assets/sui-2026-figure-1.jpg" target="_blank" rel="noopener" aria-label="Open Figure 1 at full size"><img src="assets/sui-2026-figure-1.jpg" width="715" height="651" loading="lazy" alt="Figure 1 from Sui et al. Panel a shows family sequencing, hifiasm assembly, PAV discovery, read-based validation and population-control filtering. Panels b and c summarize read and assembly quality."></a>'
 + '<figcaption>Figure reproduced unchanged from '+ext('https://www.nature.com/articles/s41467-026-68378-4/figures/1','Sui et al. (2026)')+', © The Author(s), under '+ext('https://creativecommons.org/licenses/by/4.0/','CC BY 4.0')+'.</figcaption></figure>'
 + '</article>';


const rareSvBeforeNeedlrStudy = rareSvRelatedPage.body;
rareSvRelatedPage.body = () => rareSvBeforeNeedlrStudy()
 + '<article class="related-study needlr-study" id="needlr-related-work"><h3>'+ext('https://academic.oup.com/bioinformatics/article/42/7/btag407/8709947','needLR: long-read structural variant annotation with population-scale frequency estimation')+'</h3>'
 + '<p class="study-citation">Gustafson, J. A., Lin, J., Zalusky, M. P. G., Eichler, E. E. and Miller, D. E. <em>Bioinformatics</em> 42(7), btag407 (2026).</p>'
 + '<p>needLR combines query SV calls, a population-control VCF and a matching reference genome. It filters variants, merges query and control alleles, estimates ancestry-aware population frequencies, and adds genomic and gene–phenotype annotations. Annotated VCF and TSV outputs support rare-SV prioritization; the supplied control panel contains 500 1KGP-LRSC ONT genomes.</p>'
 + '<figure class="related-study-figure"><a href="assets/needlr-2026-figure-1.jpeg" target="_blank" rel="noopener" aria-label="Open needLR Figure 1 at full size"><img src="assets/needlr-2026-figure-1.jpeg" width="520" height="164" loading="lazy" alt="needLR Figure 1: query VCF, pre-merged population VCF and reference genome enter four stages: BCFtools quality filtering, Truvari merging, ancestry-aware allele-frequency estimation, and BEDTools annotation; outputs are TSV and VCF."></a>'
 + '<figcaption>Figure reproduced unchanged from '+ext('https://doi.org/10.1093/bioinformatics/btag407','Gustafson et al. (2026)')+', © The Author(s), under '+ext('https://creativecommons.org/licenses/by/4.0/','CC BY 4.0')+'.</figcaption></figure></article>';

function renderNav() {
    const found = pages.filter(
        p => p.id !== 'large-effect');
    let prev = '';
    document.querySelector(
        '#navigation').innerHTML = found.map(
        p => {
            const group = prev !== p.group ? `<div class="nav-group"><span class="group-number">${String(
                ['GETTING STARTED', 'WORKFLOW GUIDES', 'ADDITIONAL GUIDES', 'RESOURCES'].indexOf(
                    p.group) + 1)
                .padStart(2,
                    '0')}</span>${p.group}</div>` : '';
            prev = p.group;
            return group + `<a class="nav-link ${p.id === (document.querySelector(
                '#content').dataset.chapter || 'overview') ? 'active' : ''}" href="#${p.id}">${p.title}</a>`
        }).join(
        '') || '<div class="no-results">No matching chapters.</div>'
}

function render() {
    let id = location.hash.slice(
        1) || 'overview';
    const existing = document.getElementById(
        id);
    if (existing && !pages.some(
        p => p.id === id)) {
        existing.scrollIntoView();
        return
    }
    const p = pages.find(
        p => p.id === id) || pages.find(
        p => p.body().includes(
            'id="' + id + '"')) || pages[0];
    const i = pages.indexOf(p);
    document.querySelector(
        '#content').dataset.chapter = p.id;
    document.querySelector(
        '#content').innerHTML = p.body() + `<nav class="pager" aria-label="Chapter navigation">${i ? `<a href="#${pages[i - 1].id}"><small>PREVIOUS</small>← ${pages[i - 1].title}</a>` : '<span></span>'}${i < pages.length - 1 ? `<a href="#${pages[i + 1].id}"><small>NEXT CHAPTER</small>${pages[i + 1].title} →</a>` : ''}</nav>`;
    document.querySelector(
        '#breadcrumb').textContent = p.title;
    document.title = p.title + ' · 1KGP SV';
    document.querySelector(
        '#toc').innerHTML = [...document.querySelectorAll(
        'main h2')].map(
        h => `<a href="#${h.id}">${h.textContent}</a>`)
        .join('');
    renderNav();
    document.querySelectorAll(
        '.nav-link').forEach(a => {
        if (a.hash === '#' + p.id) a.setAttribute(
            'aria-current', 'page')
    });
    document.body.classList.remove(
        'menu-open');
    document.querySelector('#menu')
        .setAttribute('aria-expanded',
            'false');
    if (id !== p.id && document.getElementById(
        id)) document.getElementById(id)
        .scrollIntoView(); else window.scrollTo(
        0, 0)
}

window.addEventListener('hashchange',
    render);
document.querySelector(
    '#menu').onclick = () => {
    const open = document.body.classList.toggle(
        'menu-open');
    document.querySelector('#menu')
        .setAttribute('aria-expanded',
            String(open))
};
document.addEventListener('keydown',
    e => {
        if (e.key === 'Escape') {
            document.body.classList.remove(
                'menu-open');
            document.querySelector(
                '#menu').setAttribute(
                'aria-expanded',
                'false')
        }
    });
document.addEventListener('click',
    async e => {
        if (e.target.classList.contains(
            'copy')) {
            try {
                await navigator.clipboard.writeText(
                    e.target.parentElement.querySelector(
                        'code').textContent);
                e.target.textContent = 'Copied';
                setTimeout(
                    () => e.target.textContent = 'Copy',
                    1800)
            } catch {
                e.target.textContent = 'Select code to copy'
            }
        }
    });
render();
