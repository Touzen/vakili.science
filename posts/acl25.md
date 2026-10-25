---
layout: default
tags: post
title: Data-Constrained Synthesis of Training Data for De-Identification
date: 2025-06-01
citation_title: Data-Constrained Synthesis of Training Data for De-Identification
citation_author: Thomas Vakili; Aron Henriksson; Hercules Dalianis
citation_publication_date: 2025
citation_conference_title: Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL 2025)
citation_pdf_url: https://aclanthology.org/2025.acl-long.1329.pdf
---
# Data-Constrained Synthesis of Training Data for De-Identification
Long paper presented at the main conference of ACL 2025 in Vienna.

## Abstract
Many sensitive domains -- such as the clinical domain -- lack widely available datasets due to privacy risks. The increasing generative capabilities of large language models (LLMs) have made synthetic datasets a viable path forward. In this study, we domain-adapt LLMs to the clinical domain and generate synthetic clinical texts that are machine-annotated with tags for personally identifiable information using capable encoder-based NER models. The synthetic corpora are then used to train synthetic NER models. The results show that training NER models using synthetic corpora incurs only a small drop in predictive performance. The limits of this process are investigated in a systematic ablation study -- using both Swedish and Spanish data. Our analysis shows that smaller datasets can be sufficient for domain-adapting LLMs for data synthesis. Instead, the effectiveness of this process is almost entirely contingent on the performance of the machine-annotating NER models trained using the original data.
