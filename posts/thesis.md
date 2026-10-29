---
layout: default
tags: post
title: Preserving the Privacy of Clinical Language Models
date: 2025-05-23
citation_title: "Preserving the Privacy of Language Models: Experiments in Clinical NLP"
citation_author: Thomas Vakili
citation_publication_date: 2025
---
# Preserving the Privacy of Clinical Language Models

You can find the predoc version of the thesis [here.](/documents/thesis-predoc.pdf)

## Abstract

The state-of-the-art methods in natural language processing (NLP) increasingly rely on large pre-trained transformer models. The strength of the models stems from their large number of parameters and the enormous amounts of data used to train them. The datasets are of a scale that makes it difficult, if not impossible, to audit them manually. When unwieldy amounts of potentially sensitive data are used to train large machine learning models, a difficult problem arises: unintended memorization of the training data.

All datasets—including those based on publicly available data—can contain personally identifiable information (PII). When models memorize these sensitive data, they become vulnerable to privacy attacks. Very few datasets for NLP can be guaranteed to be free from sensitive data. Consequently, most NLP models are susceptible to privacy leakage. This susceptibility is especially concerning in clinical NLP, where the data typically consist of electronic health records (EHRs). Leaking data from EHRs is never acceptable from a privacy perspective. This doctoral thesis investigates the privacy risks of using sensitive data and how they can be mitigated—while maintaining data utility.

A BERT model pre-trained using clinical data is subjected to a training data extraction attack. The same model is used to evaluate a membership inference attack that has been proposed to quantify the privacy risks of masked language models. Multiple experiments assess the performance gains from adapting pre-trained models to the clinical domain. Then, the impact of automatic de-identification on the performance of BERT models is evaluated for both pre-training and fine-tuning data. Finally, synthetic corpora for training models to detect PII are generated using domain-adapted generative language models. The quality of these corpora, and the parameters affecting their utility, are explored by training and evaluating BERT models.

The results show that domain adaptation leads to significantly better performance on clinical NLP tasks. They also show that extracting training data from BERT models is difficult and suggest that the risks can be further decreased by automatically de-identifying the training data. Automatic de-identification is found to preserve the utility of the data used for pre-training and fine-tuning BERT models. However, we also find that contemporary membership inference attacks are unable to quantify the privacy benefits this technique. Similarly, high-quality synthetic corpora can be generated using limited resources, but further research is needed to determine the privacy gains from using them. The results show that automatic de-identification and training data synthesis reduces the privacy risks of using sensitive data for NLP while preserving the utility of the data, but that these privacy benefits may be difficult to quantify.

## Papers

This compilation thesis is based on the following six papers:

1. [Thomas Vakili and Hercules Dalianis. 2021.](http://ceur-ws.org/Vol-3068/short1.pdf) Are Clinical BERT Models Privacy Preserving? The Difficulty of Extracting Patient-Condition Associations. In *Proceedings of the AAAI 2021 Fall Symposium on Human Partnership with Medical AI: Design, Operationalization, and Ethics (AAAI-HUMAN 2021).*
2. [Thomas Vakili and Hercules Dalianis. 2023.](https://aclanthology.org/2023.nodalida-1.33/) Using Membership Inference Attacks to Evaluate Privacy-Preserving Language Modeling Fails for Pseudonymizing Data. In *Proceedings of the 24th Nordic Conference on Computational Linguistics (NoDaLiDa).*
3. [Thomas Vakili, Martin Hansson, and Aron Henriksson. 2025.](https://aclanthology.org/2025.nodalida-1.76/) SweClinEval: A Benchmark for Swedish Clinical Natural Language Processing. In *Proceedings of the 25th Nordic Conference on Computational Linguistics (NoDaLiDa).*
4. [Thomas Vakili, Anastasios Lamproudis, Aron Henriksson, and Hercules Dalianis. 2022.](https://aclanthology.org/2022.lrec-1.451/) Downstream Task Performance of BERT Models Pre-Trained Using Automatically De-Identified Clinical Data. In *Proceedings of the 13th Conference on Language Resources and Evaluation.*
5. [Thomas Vakili, Aron Henriksson, and Hercules Dalianis. 2024.](https://link.springer.com/article/10.1186/s12911-024-02546-8) End-to-end pseudonymization of fine-tuned clinical BERT models. *BMC Medical Informatics and Decision Making*, 24(1):162.
6. [Thomas Vakili, Aron Henriksson, and Hercules Dalianis. 2025.](https://arxiv.org/abs/2502.14677) Data-Constrained Synthesis of Training Data for De-Identification. To appear in *Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers).*
