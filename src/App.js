import React from 'react';
import 'katex/dist/katex.min.css';
import Burger from '@animated-burgers/burger-rotate' 
import '@animated-burgers/burger-rotate/dist/styles.css'
import { InlineMath, BlockMath } from 'react-katex';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import styles from './App.module.scss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSwatchbook, faCode, faScroll, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import rTwoFigOne from './assets/FigOne.png';

const App = () => {
    const menu = [
        {
            name: 'Intro',
            href: '',
        },
        {
            name: 'Projects',
            href: '',
        }
        ]

    const [curActive, setCurActive] = React.useState('Intro');


  return (
    <div className={classNames(styles.container)}>
        <Body topInfo={menu} active={curActive} setActive={setCurActive}/>
    </div>
  );
}

const Body = props => {
  return (
    <Router>
      <div className={classNames(styles.mainBody)}>
        <Left active={props.active} setActive={props.setActive}/>
        <Right active={props.active} setActive={props.setActive}/>
      </div>
      </Router>
  );
};

const Left = props => {
  return (
    <div className={styles.left}>
      <div className={styles.leftImage}>
        <img src="https://i.gifer.com/NYRT.gif" alt="intro" ></img>
      </div>
      <div className={styles.leftContent}>
        <ul>
          <li>
            
              <span>
              <h4>Jaime Campos Salas</h4>
              </span>
            
          </li>
          <li>
            <a>
              <span>
                <Link to='/about'>
                About
                </Link>
                <Route path={'/about'}> -------- 👤</Route>
              </span>
            </a>
          </li>
          <li>
            <a>
              <span>
                <Link to='/projects'>Projects</Link>
                <Route path={'/projects'}> ----- 🛠️ </Route>
              </span>
            </a>
          </li>
          <li>
            <a>
              <span>
              <Link to='/research'>Research</Link>
              <Route path={'/Research'}> ----- 🤖</Route>
              </span>
            </a>
          </li>
          <li>
            <a>
              <span>
              
              </span>
            </a>
          </li>
          <li>
            <a href="mailto:jaime.campos.salas@gmail.com">
              <span style={{paddingRight: "54px"}}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </a>
            <a href="https://twitter.com/xaimehcs">
              <span style={{paddingRight: "54px"}}>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </a>
            <a href="https://github.com/jcoeus">
              <span style={{paddingRight: "0px"}}>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

};

const Right = props => {
  return (
    <div className={styles.right}>
        <Route path={'/about'} component={About}></Route>
        <Route path={'/projects'} component={Projects}></Route>
        <Route path={'/research'} component={Research}/>
    </div>
  );
};

const About = props => {
  return (
    <div >
      <div className={styles.rightHead}><h2>About</h2></div>
      <div className={styles.rightContent}>
      <br/>
      <p>
        My name is Jaime (pronounced like xai-meh). I like working with machines and, sometimes, machines like working with me too. If time and computing permits, I occasionally work on NLP/U and Deep Learning research. Though not particularly good at it, I also enjoy writing and generative art.
      </p>
      <p>
        I graduated Columbia University where I studied CS and lots of math. During my time there, I helped build a suspension bridge and a water well for an underserved community in Morocco. I also helped kickstart the Medical Informatics Society where I hosted machine learning lectures.
      </p>
      <p>
        If you'd like to collaborate on a project, please feel free to reach out. 😀
      </p>
      </div>
    </div>
  );
};

const Projects = props => {
  return (
    <div>
      <div className={styles.rightHead}>
        <h2>Projects</h2>
        <div className={styles.bur}>
          <Burger/>
        </div>  
      </div>
      <div className={styles.rightContent}>
      <Link to='/projects/project-1'><h3>Columbia Engineering Outreach Program Database</h3></Link>

      <Route path='/projects/project-1' render={() =>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enim urna, luctus vitae ullamcorper sit amet, dapibus vel augue. Pellentesque auctor nibh eros. Sed bibendum eleifend condimentum. Duis vitae laoreet nisi, quis consectetur sem. Aenean quis cursus nisi. Duis sit amet pharetra orci. Donec tempus id lacus non commodo. Nam egestas felis in ipsum sodales, at posuere dolor ornare. Nulla consequat quam vitae nisl auctor laoreet. Praesent blandit urna porta tellus sollicitudin egestas. Mauris aliquam bibendum mauris a volutpat. Donec tempus convallis nunc quis suscipit. Sed faucibus, lectus dapibus dapibus lobortis, risus lectus convallis leo, et congue dolor urna non orci. Duis tempus augue eu tristique iaculis. Mauris mattis tempus magna. Aliquam ac aliquam lectus.

  Donec eu blandit dolor. Aliquam erat volutpat. Maecenas eu lorem velit. Pellentesque eu purus leo. In porta porttitor augue ac fringilla. Duis sit amet augue dignissim, pellentesque lectus in, tempus diam. Sed commodo in erat quis sollicitudin. Ut accumsan viverra massa sed efficitur. Proin non ex mauris. Fusce quis nunc quis risus tincidunt condimentum eget ut arcu. Cras felis neque, aliquet id purus eu, semper lobortis urna. Phasellus lacinia fermentum libero vel pellentesque. Morbi ut felis arcu. Mauris volutpat ultricies venenatis. Etiam scelerisque mollis congue. Vestibulum at erat in ex ultricies blandit non sed lacus.

  Ut tincidunt est sapien, rhoncus maximus elit feugiat nec. Phasellus eget lobortis risus, id mollis enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nibh est, ornare ut iaculis eget, venenatis sit amet elit. Nullam mollis, tellus sed hendrerit scelerisque, nisi odio scelerisque velit, vitae rutrum quam risus ac nisi. Vestibulum egestas lacus et scelerisque feugiat. Vivamus ut ornare mauris, vitae iaculis erat. Suspendisse potenti. Fusce sagittis dui sit amet venenatis sodales.

      </p>}/>
      
      
      <Link to='/projects/project-2'><h3>Compiler Module for Dead Code Elimination</h3></Link>
      <Route path='/projects/project-2'>
        <p>
          Nam ullamcorper, diam a rhoncus rhoncus, orci urna vehicula nisi, eu sagittis sapien metus in lacus. Ut quis tempus diam. Etiam hendrerit suscipit lobortis. Donec in ullamcorper nisi, at hendrerit odio. Pellentesque lobortis eleifend mattis. Etiam in dui sed ex posuere auctor malesuada ut nibh. Suspendisse consequat nibh metus, at tincidunt neque pretium in. Curabitur egestas nibh id lacus laoreet, at suscipit justo auctor. Sed ac auctor leo. Cras ac molestie leo, molestie vehicula sapien. Aenean sodales condimentum ex, at vulputate risus tempor in. Etiam ut elit metus. Curabitur eu sem nec ipsum scelerisque aliquet a a tortor.

          Nulla et tempus justo. Quisque congue vehicula magna sed vehicula. Nam aliquet lacus ac pretium tristique. Nam sit amet bibendum urna. Sed et ex lacinia sapien lobortis placerat. Quisque odio odio, semper quis erat vitae, volutpat tincidunt sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam lorem ligula, vulputate quis suscipit in, ornare in tortor. Integer tincidunt volutpat scelerisque. Aliquam dignissim blandit aliquet. Duis magna augue, rhoncus quis sollicitudin vitae, mattis vitae lectus.

          Phasellus mi purus, interdum eget placerat nec, rutrum non enim. Pellentesque pretium dictum aliquet. Vivamus placerat felis tortor, vitae tempor augue aliquam eu. Aenean eleifend, nunc eu lacinia ullamcorper, erat diam cursus urna, scelerisque posuere quam nibh sed quam. Donec pharetra augue vel eros bibendum, convallis auctor sapien convallis. Proin nibh dui, suscipit sit amet lacus ac, interdum bibendum est. Maecenas egestas tincidunt tellus vel accumsan. Cras consequat finibus odio, ac imperdiet velit vestibulum vel. Sed vehicula, odio sit amet bibendum sollicitudin, magna nunc rutrum diam, vel eleifend felis erat id neque. Integer efficitur dolor purus, et aliquam justo vehicula quis. Morbi iaculis viverra nisl quis aliquam. In suscipit a urna quis hendrerit. Curabitur vitae lacus elementum, ultricies nisl id, bibendum nibh. Nullam fermentum iaculis consequat. Quisque tempor fringilla facilisis.

          Duis et orci semper, tincidunt massa vel, rhoncus dui. Phasellus nec tortor at quam ultrices tempus nec at metus. Ut nec ligula urna. In hac habitasse platea dictumst. Sed sagittis accumsan interdum. Morbi euismod condimentum justo et malesuada. Quisque feugiat est ac est sagittis, sed faucibus ex tincidunt. Integer placerat at lectus id consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec molestie nunc fringilla condimentum porta. In eu turpis vitae augue molestie volutpat eget ut augue. Ut finibus sodales sem, eget pulvinar risus ultricies ac. Phasellus blandit quis nibh eget ullamcorper. Proin purus sem, sagittis convallis fringilla in, venenatis nec nisi.

          Praesent non hendrerit tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent ligula ex, scelerisque non faucibus sed, tincidunt nec diam. Proin posuere ipsum sem, nec dignissim nibh pretium sed. Nam volutpat a nunc a tristique. Donec at feugiat tortor. Sed eleifend molestie porta. Donec pellentesque lectus quis tellus consectetur tincidunt. Nam blandit nunc vitae suscipit malesuada. Nulla dolor justo, lacinia ac erat eget, venenatis hendrerit lorem. Curabitur sed tempus lacus. Vivamus rutrum maximus auctor. Sed maximus turpis id nisl congue, at vestibulum libero luctus. Donec elementum blandit nunc, et euismod dolor venenatis non. Maecenas ultrices congue metus, in auctor ligula mollis sit amet.

          Integer sollicitudin odio vitae varius vulputate. Quisque vitae placerat diam, vitae egestas justo. Donec ultricies lorem in consequat tincidunt. Pellentesque eu turpis posuere, ultricies purus vel, sollicitudin mauris. Phasellus pretium justo leo, et pulvinar lorem venenatis non. Praesent hendrerit iaculis nibh, eget commodo magna aliquet ac. Sed eget placerat ligula. In hac habitasse platea dictumst. Sed vitae pharetra leo.

          Mauris pulvinar volutpat massa id aliquet. Donec id scelerisque elit. Suspendisse efficitur pretium nulla, eu egestas lorem blandit quis. Pellentesque non congue ipsum. Nunc pharetra enim id nunc dignissim sollicitudin. Nunc fringilla porttitor tellus. Sed a ante enim. Quisque sed purus congue, gravida nisl a, pretium dolor.
        </p>
      </Route>
      </div>
    </div>
 
  )
};

const Research = props =>  {
  return (
    <div>
      <div className={styles.rightHead}><h2>Research</h2></div>
      <div className={styles.rightContent}>
      <Link to='/research/research-1'>
        <h3>Text Summarization with Modern Word Embeddings and Pointer-Generator Networks</h3>
        <p>with Andres Talero and Abdullah Siddique</p>
        <hr/>
      </Link>
      <Route path='/research/research-1'>
        <h4>Abstract</h4>
          <p>
            We conduct a performance overview of novel word embedding developments over the past two decades. We apply transfer learning to a text summarization neural network by administering different word embedding types to the network, which uses a combination of extractive and abstractive methods. We describe the differences in training and implementation for different word embedding types and produce a quantitative and qualitative analysis that compares the results produced by each one.
          </p>
        <h4>Introduction</h4>
          <p>
            Word embeddings in neural networks are often times learned as part of the NLP task, where there is a one-to-one correspondence between words and their respective low-dimensional vector representations. This is the case in the text summarization model by See et al. (2017). While this model adds innovations that allow it to effectively employ abstractive and extractive techniques for text summarization, it still uses the aforementioned embedding matrix mechanism. We aim to improve this part of the network via transfer learning. We use state-of-the-art embeddings and embedding models that are known to have improved other NLP tasks to improve text summarization.
          </p>
          <p>
            The models we use are Embeddings from Language Models (ELMo; Peters et al.,2018), Global Vectors for Word Representation (GloVe; Pennington et. al, 2014), and Efficient Estimation of Word Representations in Vector Space (Word2Vec; Mikolov et. al, 2013). The baseline model (See et al. 2017) uses ROUGE scores as a metric. We show that introducing new word embeddings improves the quality of test summaries with respect to the baseline model. Finally, we conduct an evaluation of our results, in which we compare the ROUGE scores and some sample summaries for each embedding type.
          </p>
        <h4>Related Work</h4>
          <p>
            See et al.’s (2017) model includes two main mechanisms on top of a basic encoder (bidirectional RNN with LSTM cells) - decoder (unidirectional RNN with LSTM cells) model. The mechanisms are coverage, which uses a penalty function to avoid excessive copying of words from the source text, and a pointer-generator network, which allows the model to both copy words from the source text and generate words from a vocabulary.
          </p>
          <p>
            Pennington et. al (2014) provide a high-level explanation of their GloVe; their bi-linear re- gression model "combines the advantages of the two major model families in the literature: global matrix factorization and local context window methods." They add that it "efficiently leverages statistical information by training only on the nonzero elements in a word-word co-occurrence matrix."
          </p>
          <p>
            In their Word2Vec model, Mikolov et.al (2013) propose two simple methods for learning efficient and accurate vector representations of words. The first technique is continuous bag-of-words (CBOW) where the word is predicted using a window of surrounding words as the input (order of the surrounding words doesn’t matter). The second technique is continuous skip-gram where a word is the input and the surrounding words are predicted. In our project we used the skip-gram method. The idea behind skip-gram is to learn efficient vector representations of words and specifically learn similar words. The intuition behind this is that if two words have similar contexts then they should have similar representations as well. So instead of predicting the next word, the model predicts whether a pair of words is relevant or not an if they are then they have similar representaions.
          </p>
          <p>
            ELMo (Peters et. al., 2018) stands out from other word vectorization algorithms for two reasons. Firstly, the input to the model is not a single word but a whole sentence. In this way, the model will capture the context the word is used in. This helps to resolve issues of ambiguity, like in the case of homographs. Secondly, the authors provide an architecture that may be used to solve a variety of NLP problems, making ELMo suitable for transfer learning. The vector representations for words for any given sentence are only partially learned, allowing for additional parameters to be tuned for a specific learning task.
          </p>
          <p>
            Lastly, Deep Bidirectional Transformers for Language Understanding (BERT; Devlin et al., 2018) uses sentence context (like ELMo). Additionally, it makes use of transformers as opposed to traditional RNN’s.
          </p>
          <h5>Summary of Related Work</h5>
          <table style={{width: "80%"}}>
            <thead>
              <tr>
                <th>Model</th>
                <th>Architecture</th>
                <th>Pretrained Vector Dataset</th>
                <th>Pretrained Dimensions Available</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Embedding Matrix (Bengio et al., 2003)</td>
                <td>Embedding matrix learned as part of some network</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Skipgram (Mikolov et al., 2003)</td>
                <td>Words predicted within a certain range before and after the current word</td>
                <td>Google New corpus (trained on 100 million words)</td>
                <td>300</td>
              </tr>
              <tr>
                <td>GloVe (GloVe; Pennington et al., 2014)</td>
                <td>Trained on co-occurrence matrix with fixed window size (for context)</td>
                <td>Several: Wikipedia, Gigaword 5, Common Crawl and Twitter</td>
                <td>50, 100, 200, 300</td>
              </tr>
              <tr>
                <td>ELMo (Peters et al., 2018)</td>
                <td>Forward and backward language models consisting of layers LSTM's with a layer of character convolutions</td>
                <td>1 billion Word Language Model Benchmark</td>
                <td>1024, 2048, 4096</td>
              </tr>
              <tr>
                <td>BERT (Devlin et al., 2018)</td>
                <td>Transformers: "a model archicture eschewing recurrence and instead relying entirel on an attention mechanism to draw global dependencies between input and output." (Vaswani et al., 2017)</td>
                <td>Origianlly on BookCorpus (800 million words) and English Wikipedia (2,500 million words) - multilingual BERT now available</td>
                <td>768, 1024</td>
              </tr>
            </tbody>
          </table>
          
        <h4>Our Model</h4>
          <p>
            See et al.’s (2017) architecture includes a simple embedding layer, that is, an embedding matrix of dimensions (embedding dimension) × (number of embedded words). Tensorflow embedding lookups are performed to extract vector representations for words. The vocabulary distribution and the attention distribution only depend on attention, so we can easily work with altering only the embedding layer without affecting the rest of the architecture. The new model will learn new attention weights and encoder hidden states based on our new inputs. The code for our models is available online.
          </p>
          <h5>Notation</h5>
          <p>
            If the vector representation is dependent on context (like in ELMo), then <InlineMath>{"v_{i,j}^{model}"}</InlineMath> is the <InlineMath>{"j^{th}"}</InlineMath> word in the <InlineMath>{"i^{th}"}</InlineMath> sentence of some input sequence (the text to be summarized). <InlineMath>{"model"}</InlineMath> can take any of the following values <InlineMath>{"ELMO_p, ELMO_t, GLOVE"}</InlineMath> or <InlineMath>{"W2V"}</InlineMath>.
          </p>
          <p>
            <InlineMath>{"t"}</InlineMath> indicates that there is some task-specific training that occurs when we change the embed- ding layer of the original text summarization model.
          </p>
          <h5>Word2Vec:Skipgram representations</h5>
          <p>
            At first we tried using pretrained embeddings by Google (Mikolov et. al, 2013) that were trained on Google articles but the problem we faced was that they only contained American English words and not British English (center not centre). This, along with other reasons, meant that more than 20 percent of our vocabulary was not in the embeddings. Therefore we decided to train our own skipgram model to get the embeddings. We trained skip gram embeddings with 40,000 articles (around 30 million words) for 300 dimension embeddings. We used a skip window of 1 (which could be varied in future testing). The loss function for this is noise contrastive estimation which aims to distinguish true context words from fake context words.
          </p>
          <h5>GloVe representations</h5>
          <p>
          We retrain See et al.’s (2017) network with the publicly available 300-dimensional pretrained vectors which have been trained on Gigaword 5 and Wikipedia. The intuition behind GloVe is that similar words should be close in vector space.
          </p>
          <h5>Task-Specific ELMo Representations</h5>
          <p>
            The GitHub repo for ELMo (allenlp library) states that "Pre-trained contextual representations of words from large scale bidirectional language models provide large improvements over GloVe word2vec baselines." One main difference to note between GloVe and ELMo is that the former produces one unique representation for every word. For ELMo, we will input articles from the data into the pretrained model (as opposed to words) and receive a representation for each word in the article. In ELMo, context matters, and therefore the word "dog" in one context will not have the same representation as "dog" in another context. Peters et. al. (2018) explain that ELMo representations "are computed on top of two-layer biLMs with character convolutions (Sec. 3.1), as a linear function of the internal network states." The following equation from Peters et al.’s (2018) paper describes the computation of a word representation:
          </p>
          <BlockMath>{"v_{i,j}^{ELMO_t}=E(R_{i,j};\\Theta^t) = \\gamma^t \\sum_{j=0}^{L} s_l^t h_{l,i,j}^{LM} "}</BlockMath>
          <p>
            <InlineMath>{"\\Theta^t"}</InlineMath> represents the parameters learned specifically for a specific task <InlineMath>{"t"}</InlineMath> (text summarization in our case). <InlineMath>{"l"}</InlineMath> denotes the layer in the ELMo architecture (starting at 0 for the input embedding).<InlineMath>{"h_{l,i,j}^{LM}"}</InlineMath> is a horizontal concatenation of the forward states and backward states (LSTM's) in ELMo for <InlineMath>{"l \> 0"}</InlineMath>. These forward and backward states are language models. When <InlineMath>{"l = 0"}</InlineMath>, it is simply an embedded representation of a tokenized word. The final representation of the word is a weighted sum over all layers. These weights are learned in our task. Lastly, <InlineMath>{"\\gamma"}</InlineMath> is a scalar that multiplies our final vector, and is also task-specific learned parameter, as is <InlineMath>{"s."}</InlineMath>
          </p>
          
          <h5>Summary of Vectors Implemented</h5>
          <table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Training Regimen</th>
                <th>Pretrained Dataset</th>
                <th>Embedding Dimension</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Embedding Matrix (Bengio et al., 2003)</td>
                <td>Embedding matrix learned as part of the network</td>
                <td>N/A</td>
                <td>400</td>
              </tr>
              <tr>
                <td>Skipgram (Mikolov et al., 2003)</td>
                <td>Custom-trained on our training data with windowsize of 1</td>
                <td>40,000 articles from our training data </td>
                <td>300</td>
              </tr>
              <tr>
                <td>GloVe (GloVe; Pennington et. al, 2014)</td>
                <td>Publicly available pretrained vectors</td>
                <td>Wikipedia 2014 + Gigaword 5</td>
                <td>300</td>
              </tr>
              <tr>
                <td>ELMo (Peters et al., 2018)</td>
                <td>Learned task specific parameters for pretrained vectors</td>
                <td>1 Billion Word Language Model Benchmark</td>
                <td>1024</td>
              </tr>
            </tbody>
          </table>
        <h4>Experiments and Results</h4>
          <h5>Settings</h5>
            <p>
              In order to take advantage of the most up-to-date CUDA libraries, we updated See’s original code to run on Tensorflow 1.13 and python 3.6. All models were built using See’s architecture beyond the input embedding portion. Due to the large cost in time and GPU memory, the training regimen and parameters were reduced. All models were run with a maximum encoding step size of 400, maximum decoding step size of 100, batch size of 8 and 128 hidden units for the LSTM layer. Based off See’s optimal vocabulary size finding, we set ours to 50,000 as well. All models were trained using the Adagrad optimizer with a learning rate of 0.15 and an initial accumulator value of 0.1.
            </p>
          <h5>Dataset</h5>
            <p>
              We trained all of our models using the CNN/Daily Mail dataset provided by See et al (2017). This corpus was originally produced by processing the DeepMind question and answer dataset presented by Hermann et al. (2015). The CNN/Daily Mail dataset contains news articles with their respective human made multi-sentence summaries separated into train, test and validation subsets. We only used 40% of the original training dataset, about 115,000 articles, in order to timely analyze all models. The test dataset was left untouched and it consisted of 11,490 articles.
            </p>
          <h5>Evaluation Metrics</h5>
            <p>
              Quantitatively, using the CNN/Daily Mail test dataset and the pyrougue library, we calculated ROUGE F1 scores for unigram, bigram and longest common subsequence. We then averaged the scores to give an overview of performance.
            </p>
            <p>
              Qualitatively, we looked at different test samples and analyzed between different abstract outputs across different models for fluency, saliency, grammatical and information correctness, and abstractive strength.
            </p>
          <h5>Results</h5>
            <p>
              ROUGE F1 scores per different models trained under the same parameters. R-AVG is the average F1 score across all different ROUGE scores.
            </p>
            
            <div className={styles.resultTable}>
              <table>
                  <thead>
                      <tr>
                          <th>Model</th>
                          <th>ROUGE-1</th>
                          <th>ROUGE-2</th>
                          <th>ROUGE-L</th>
                          <th>R-AVG</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>
                          PointerGenerator + Coverage - See et al (2017)
                        </td>
                        <td>
                          39.53
                        </td>
                        <td>
                          17.28
                        </td>
                        <td>
                          36.38
                        </td>
                        <td>
                          31.06
                        </td>
                      </tr>
                      <tr>
                        <td>
                            PointerGenerator + Coverage - See et al (2017) - retrained
                        </td>
                        <td>
                          35.37
                        </td>
                        <td>
                          14.65
                        </td>
                        <td>
                          31.80
                        </td>
                        <td>
                          27.27
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Glove + PointerGenerator + Coverage
                        </td>
                        <td>
                          36.00
                        </td>
                        <td>
                          14.97
                        </td>
                        <td>
                          33.04
                        </td>
                        <td>
                          28.00
                        </td>
                      </tr>
                      <tr>
                        <td>
                          SkipGram + PointerGenerator + Coverage
                        </td>
                        <td>
                          37.00
                        </td>
                        <td>
                          15.68
                        </td>
                        <td>
                          33.58
                        </td>
                        <td>
                          28.75
                        </td>
                      </tr>
                      <tr>
                        <td>
                          ELMo + PointerGenerator + Coverage
                        </td>
                        <td>
                          37.39
                        </td>
                        <td>
                          15.81
                        </td>
                        <td>
                          34.67
                        </td>
                        <td>
                          29.29
                        </td>
                      </tr>
                  </tbody>
              </table>
            </div>
            <p>Randomly picked test articles: </p>
            <div className={styles.resultTable}>
              <table>
                  <thead>
                    <tr>
                      <th width="100%">Article</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>"this is the moment an unlucky man was gored between the legs by a rampaging bull after being knocked to the ground during a bullrunning celebration in spain . the unnamed man was sprinting ahead of the animal , trying to make it to the safety behind a set of iron bars when the angry animal sent him sprawling to the floor . and despite his desperate efforts to climb back up , the bull appeared to hit him right in the bottom with one of its horns as he tried to scramble away . scroll down for video . this unlucky man was gored during a bullrunning event in teulada , a small coastal town on spain ’s costa blanca , after falling over in front of the beast . the man , who has not been identified , was seen running away from the angry animal before it caught him with one horn , sending him sprawling to the floor . pictures show him crawling desperately towards the safety of the bull bars , but he was unable to make it before the horn hit him square between the legs . the unfortunate incident happened on the street in teulada , a small coastal town on spain ’s costa blanca , during the annual fiesta . the celebrations begin on april 8 and last until april 19 , and include floatillas and parades celebrating the town ’s patron saint , sant vicent ferrer . as part of the fiesta , large , aggressive bulls are let loose to run around the streets , with local and visitors invited to run alongside them . the challenge is to tease the animals before escaping behind one of the wooden pallets or iron bull bars to safety . witnesses said the man was seen limping towards medical crews after the attack , but was unsupported and appeared not to have been seriously hurt . the bullrunning takes place during the town ’s annual fiesta , which includes float parades in honour of sant vicent ferrer , the village ’s patron saint . websites advertising the bull running recommend leaving the sport to the experienced locals , noting that the animals are faster than people think , and that it is mostly foreigners that get injured . while it is not known where this man came from , he was seen limping away to be tended by medical crews after the attack . he was not though to have been seriously injured "</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th width="100%">Human Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>"man was fleeing bull during fiesta celebrations in teulada , eastern spain . was knocked to the ground before crawling towards safety of bull bars . however he could n’t make it before horn caught him between the legs . seen limping towards medics , but was not thought to be seriously hurt ."</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th width="100%">PointerGenerator + Coverage (baseline) Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>"the unnamed man was gored between the legs by a rampaging bull . the man was gored during a bullrunning event in teulada , a small coastal town on spain ’s costa blanca . the celebrations begin on april 8 and last until april 19 ."'</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th width="100%">Glove + PointerGenerator + Coverage Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>"man was gored between the legs by a rampaging bull . the bull appeared to hit him right in the bottom with one of its horns as he tried to scramble away . despite his desperate efforts to climb back up , trying to make it to the safety behind a set of iron bars ."</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th width="100%">SkipGram + PointerGenerator + Coverage Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>"unlucky man was gored during a bullrunning event in teulada , a small coastal town on spain ’s patron saint , sant vicent ferrer . witnesses said the man was seen limping towards medical crews after the town ’s patron saint . websites advertising the bull running recommend leaving the sport to run around the streets ."</td>
                   </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th width="100%">ELMo + PointerGenerator + Coverage Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>"unlucky man was gored between the legs by a rampaging bull after being knocked to the ground during a bullrunning celebration in spain . the man was gored during a bullrunning event in teulada , a small coastal town on spain ’s costa blanca ."</td>
                    </tr>
                  </tbody>
              </table>
              <br/>
              <table>
                  <thead>
                    <tr>
                      <th width="100%">Article</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>"jamie carragher believes chelsea captain john terry is the best defender to have ever graced the premier league . terry , 34 , has enjoyed another impressive season at stamford bridge and was the star performer as he led jose mourinho ’s side to a 0-0 draw against arsenal on sunday . the draw at the emirates means chelsea now need just six points from five games to claim their first premier league title since 2010 . john terry celebrates after the premier league match between arsenal and chelsea at the emirates stadium . jamie carragher believes the chelsea captain is the best defender to have played in the premier league . carragher insists terry deserves much of the credit , saying on sky sports : ‘ there ’s no doubt that , just behind -lrb- eden -rrb- hazard in this chelsea team , terry has been the most influential . ‘ we ’ve seen -lrb- cesc -rrb- fabregas , -lrb- nemanja -rrb- matic and diego costa feature in the early part of the season , but if you look at terry ’s display -lrb- against arsenal -rrb- he was outstanding . ‘ we talk about chelsea being a defensive team , but sometimes you ’ve got to say they defend brilliantly , and terry is the best . carragher -lrb- left -rrb- claimed terry has been almost as influential as chelsea ’s star man eden hazard . ‘ there have been a lot of great centre-backs in premier league history , but i think he has been the best that we ’ve seen . ’ blues boss mourinho was also quick to praise his captain after sunday ’s draw and even claimed it was terry ’s best performance in a chelsea shirt . mourinho said : ’ i told john terry in the dressing room that he made fantastic performances with me in six years but for me this was the best i have seen from him . ‘ it was the best jt has ever played . his defensive performance was absolutely amazing . ’ terry looks to get the better of arsenal striker olivier giroud during the 0-0 draw in north london . blues boss jose mourinho hailed terry ’s performance against arsenal as the‘ best ’ he has seen"</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th width="100%">Human Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>"john terry helps chelsea earn 0-0 premier league draw against arsenal . chelsea captain has been in brilliant form for jose mourinho this season . jamie carragher believes terry is the premier league best centre back . mourinho : that was terry best performance for chelsea . if there was a pfa defender of the year category , terry would clean up !"</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th width="100%">PointerGenerator + Coverage (baseline) Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>"chelsea captain john terry is the best defender to have ever graced the premier league . the draw at the emirates means chelsea now need just six points from five games to claim their first premier league title since 2010"</td>     
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th width="100%">Glove + PointerGenerator + Coverage Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>"jamie carragher believes chelsea captain john terry is the best defender . terry , 34 , has enjoyed another impressive season at stamford bridge . draw at the emirates means chelsea now need just six points from five games to claim their first premier league title since 2010 . blues boss jose mourinho hailed terry ’s performance against arsenal as ‘ best ’ he has seen ."</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th width="100%">SkipGram + PointerGenerator + Coverage Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>"john terry celebrates after the premier league match between arsenal and chelsea at the emirates stadium . the draw at the emirates means chelsea now need just six points from five games to claim their first premier league title since 2010 ."</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th width="100%">ELMo + PointerGenerator + Coverage Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>"jamie carragher believes chelsea captain john terry is the best defender to have ever graced the premier league . the draw at the emirates means chelsea now need just six points from five games to claim their first premier league title . the chelsea captain is the best defender to have played in the premier league ."</td>
                    </tr>
                  </tbody>
              </table>
            </div>

          <h5>Analysis</h5>
            <p>
              GloVe makes an improvement over the baseline for all ROUGE scores. When looking at the first example, we see that the baseline diverges from the main point in the last sentence. Clearly, the main point of the article is the man’s injury. However, the baseline says “the celebrations begin on april 8 and last until april 19 .” The GloVe summary focuses on the man’s injury all throughout, which is more relevant for the summarization task. The SkipGram summary attempts to connect two distant sentences from the article, but ultimately says something grammatical yet strange, stating "websites advertising the bull running recommend leaving the sport to run around the streets." ELMo gives a a concise summary covering all important points, that is, the event, location, and some descriptive text. However, it makes no mention of the man "scrambling away" or seeking help.
            </p>
            <p>
              In the second example, the GloVe model is able to quote Mourinho, which is also the case in the human summary. The baseline model, however, does not quote Mourinho, the manager for Chelsea. Mourinho’s comment on Terry is important. The GloVe model is more detailed than both the human summary and the baseline, stating both Terry’s age as well as the number of points Chelsea needs to win the Premiere League. SkipGram performs the worst. The difference between skipgram and the baseline is just two words; "chelsea captain." Hence, the skipgram model is slightly (though negligibly) less detailed. Overall, GloVe gives us the best summary. However it is still less abstractive than the human summary. The ELMo summary, like the others, is grammatically correct and accurate, however, it repeats itself (first and last sentences).
            </p>
            <p>
              At a glance, most other test abstracts results, across different models, had similar qualitative patterns as discussed above.
            </p>
            <p>
            ROUGE scores across different implementations underwent similar consistent improvements at the word level, bigram level and longest sequence level. The ELMo based model, implementing a context based approach, enjoyed the largest rise in ROUGE score. While these improvements seem encouraging, ROUGE scores as a metric have been shown to be less than ideal due to the subjective manner in which they favor the reference —human made abstract in our case (Shi et al 2018). Hence while our scores showed improvement, they don’t capture the full picture as well as our qualitative analysis.
            </p>
        <h4>Conclusion and Future Work</h4>
        <p>
          In this work, we presented different pointer-generator + coverage models implementing novel embeddings developed in the past two decade (Almeida and Xexéo, 2019). These models managed to outperform the baseline — using an embedding matrix — in both ROUGE scores and qualitative results. In the same vein as ELMo, other transfer learning models based off sentence context (such as BERT) could also improve the performance on these metrics. Nonetheless, these models seem to hit a wall as to the level of salient information, grammatical correctness and human readability produced. We believe that delving beyond character, word and sentence level embeddings is needed to achieve this. Developing paragraph and article embeddings to complement the embeddings used in this paper could be a path forword to further improve text summarization.
        </p>
        <h4>References</h4>
        <p>See, A., Liu, P. J., & Manning, C. D. (2017). Get to the point: Summarization with pointer-generator networks. arXiv preprint arXiv:1704.04368. Retrieved from https:arxiv.org/abs/1704.04368</p>
        <p>Peters, M. E., Neumann, M., Iyyer, M., Gardner, M., Clark, C., Lee, K., & Zettlemoyer, L. (2018). Deep contextualized word representations. arXiv preprint arXiv:1802.05365.</p>
        <p>Pennington, J., Socher, R., Manning, C. (2014). Glove: Global vectors for word representation. In Proceedings of the 2014 conference on empirical methods in natural language processing (EMNLP) (pp. 1532-1543).</p>
        <p>Devlin, J., Chang, M. W., Lee, K., & Toutanova, K. (2018). Bert: Pre-training of deep bidirectional transformers for language understanding. arXiv preprint arXiv:1810.04805.</p>
        <p>Hermann, K. M., Kocisky, T., Grefenstette, E., Espeholt, L., Kay, W., Suleyman, M., & Blunsom, P. (2015). Teaching machines to read and comprehend. In Advances in Neural Information Processing Systems (pp. 1693-1701).</p>
        <p>Mikolov, T., Chen, K., Corrado, G., Dean, J. (2013). "Efficient estimation of word representations in vector space." arXiv preprint arXiv:1301.3781.</p>
        <p>Bengio, Y., Ducharme, R., Vincent, P., Jauvin, C. (2003). A neural probabilistic language model. Journal of machine learning research, 3(Feb), 1137-1155.</p>
        <p>Almeida, F., Xexéo, G. (2019). Word Embeddings: A Survey. arXiv preprint arXiv:1901.09069.</p>
        <p>Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Polosukhin, I. (2017). Attention is all you need. CoRR abs/1706.03762.</p>
        <p>Shi, Tian, et al. "Neural Abstractive Text Summarization with Sequence-to-Sequence Models." arXiv preprint arXiv:1812.02303 (2018).</p>
        <hr></hr>
        <hr></hr>
      </Route>
      
      
      <Link to='/research/research-2'>
        <h3>Deep Learning Resource Analysis Using Memory-Efficient Adaptive Optimization</h3>
        <p>with Rahul Das and Zhixiang Hu</p>
        <hr/>
      </Link>
      <Route path='/research/research-2'>
        <h4>Abstract</h4>
        <p>
          The use of adaptive gradient-based optimizers is widespread in machine learning, the most popular of which are Adam, Adagrad, and Adafactor. These optimizers utilize cumulative second-order statistics to tune the learning rate of each parameter during the optimization process, presenting numerous advantages, most importantly, constraining the time and space requirements of the methods to be linear in the number of parameters. However, the existing optimizers still present significant memory overhead when training models with billions of parameters. This places a limitation on the size of the model and on the batch size during training, which can severely effect the accuracy of the model. By improving on the memory overhead of existing optimizers, we can train ever more complex and accurate models, which is especially pertinent to the field of natural language processing. Anil et al. [2] present a novel adaptive optimization method which retains the benefits of conventional per-parameter adaptivity while significantly reducing memory requirements.
        </p>
        <h4>Introduction</h4>
        <p>
          The use of adaptive gradient-based optimizers is widespread in machine learning, the most popular of which are Adam, Adagrad, and Adafactor. These optimizers utilize cumulative second-order statistics to tune the learning rate of each parameter during the optimization process, presenting numerous advantages, most importantly, constraining the time and space requirements of the methods to be linear in the number of parameters.
        </p>
        <p>
          However, the existing optimizers still present significant memory overhead when training models with billions of parameters. This places a limitation on the size of the model and on the batch size during training, which can severely effect the accuracy of the model. By improving on the memory overhead of existing optimizers, we can train ever more complex and accurate models, which is especially pertinent to the field of natural language processing. Anil et al. [2] present a novel adaptive optimization method which retains the benefits of conventional per-parameter adaptivity while significantly reducing memory requirements.
        </p>
        <p>
          The optimization algorithm, presented below in pseudocode (SM3-I), utilizes covers over the parameters, i.e. a collection of k nonempty set <InlineMath>{"\\{S_r\\}_{r=1}^k"}</InlineMath> such that <InlineMath>{"S_r \\subseteq [d]"}</InlineMath> and <InlineMath>{"\\cup_rS_r = [d]."}</InlineMath> For each set <InlineMath>{"S_r"}</InlineMath> in the cover, the algorithm maintains a cumulative sum <InlineMath>{"\\mu_t(r)"}</InlineMath> of the maximal variance over all gradient entries <InlineMath>{"j\\in S_r."}</InlineMath> Then, for each parameter <InlineMath>{"i,"}</InlineMath> the minimum is taken over all variables <InlineMath>{"\\mu_t(r)"}</InlineMath> associated with sets which cover <InlineMath>{"i(S_r \\ni i)."}</InlineMath> The square root of this minimum, <InlineMath>{"\\sqrt{v_t(i)}"}</InlineMath>, is used to determine the learning rate corresponding to the <InlineMath>{"i"}</InlineMath>'th gradient entry. As such, the algorithm is named Square-root of Minima of Sums of Maxima of Squared-gradients Method, or simply, SM3.
        </p>
        <div className={styles.algo}>
          <table>
            <thead>
              <tr style={{textAlign: "center"}}>
                SM3-I <InlineMath>{"(\\eta)"}</InlineMath> Algorithm
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{paddingLeft: "40px"}}>
                <b>Input:</b> learning rate <InlineMath>{"\\eta"}</InlineMath>
                </td>
              </tr>
              <tr>
                <td style={{paddingLeft: "40px"}}>Initialize <InlineMath>{"w_1 = 0; \\forall r \\in [k] : \\mu_0(r) = 0;"}</InlineMath></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "40px"}}><b>for </b> <InlineMath>{"t = 1,\\cdots, T "}</InlineMath><b> do:</b></td> 
              </tr>
              <tr>
                <td style={{paddingLeft: "80px"}}>receive gradient <InlineMath>{"g_t = \\nabla \\ell_t(w_t)"}</InlineMath></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "80px"}}><b>for </b> <InlineMath>{"r = 1,\\cdots, k "}</InlineMath><b> do:</b></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "120px"}}>set <InlineMath>{"\\mu_t(r) \\leftarrow \\mu_{t-1}(r) +\\max_{j\\in S_r}g_t^2(j)"}</InlineMath></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "80px"}}><b>end for</b></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "80px"}}><b>for </b> <InlineMath>{"i = 1,\\cdots, d "}</InlineMath><b> do:</b></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "120px"}}>set <InlineMath>{"\\nu_t(r) \\leftarrow \\min_{r:S_r\\ni i}\\mu_t(r)"}</InlineMath></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "80px"}}><b>end for</b></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "80px"}}>update <InlineMath>{"w_{t+1}(i) \\leftarrow w_t(i) - \\eta g_t(i)/\\sqrt{\\nu_t(i)}"}</InlineMath></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "40px"}}><b>end for</b></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          They also propose a variant of, SM3-II, which they claim provides a tighter upper bound on the cumulative gradient squares, as compared to SM3-I.
        </p>
        <div className={styles.algo}>
          <table>
            <thead>
              <tr style={{textAlign: "center"}}>
                SM3-II <InlineMath>{"(\\eta)"}</InlineMath> Algorithm
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{paddingLeft: "40px"}}>
                <b>Input:</b> learning rate <InlineMath>{"\\eta"}</InlineMath>
                </td>
              </tr>
              <tr>
                <td style={{paddingLeft: "40px"}}>Initialize <InlineMath>{"w_1 = 0; \\forall r \\in [k] : \\mu'_0(r) = 0;"}</InlineMath></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "40px"}}><b>for </b> <InlineMath>{"t = 1,\\cdots, T "}</InlineMath><b> do:</b></td> 
              </tr>
              <tr>
                <td style={{paddingLeft: "80px"}}>receive gradient <InlineMath>{"g_t = \\nabla \\ell_t(w_t)"}</InlineMath></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "80px"}}>Initialize <InlineMath>{"\\forall r \\in [k] : \\mu'_t(r) = 0"}</InlineMath></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "80px"}}><b>for </b> <InlineMath>{"i = 1,\\cdots, d "}</InlineMath><b> do:</b></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "120px"}}>set <InlineMath>{"\\nu'_t(i) \\leftarrow \\min_{r:S_r \\ni i}\\mu'_{t-1}(r) + g_t^2(j)"}</InlineMath></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "120px"}}>set <InlineMath>{"w'_{t+1}(i) \\leftarrow w_{t}(i) - \\eta g_t(i)/\\sqrt{\\nu'_t(i)}"}</InlineMath>*</td>
              </tr>
              <tr>
                <td style={{paddingLeft: "120px"}}>*with the convention that <InlineMath>{"0/0 =0"}</InlineMath></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "120px"}}><b>for </b> all <InlineMath>{"r:S_r \\ni i"}</InlineMath><b> do:</b></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "160px"}}>set <InlineMath>{"\\mu'_t(r) \\leftarrow \\max\\{\\mu'_t(r), \\nu'_t(i)\\}"}</InlineMath></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "120px"}}><b>end for</b></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "80px"}}><b>end for</b></td>
              </tr>
              <tr>
                <td style={{paddingLeft: "40px"}}><b>end for</b></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Experimental Setup</h4>
        <p>
          In the following sections, we will compare the performance of SM3 with other adaptive (Adam, Adagrad) and non- adaptive (SGD) optimizers.
        </p>
        <p>
          To test the optimizers, we consider a language modelling task, specifically dependency parsing. For this task, the model must parse the sentence into a tree structure by correctly labelling each word with the correct part-of-speech and predicting the relationship between words in the sentence. The model used is a feed-forward neural network with an embedding layer and two hidden layers, which produces a categorical output.
        </p>
        <p>
          The dataset used is the Penn Treebank WSJ, which is split into training (∼40,000 sentences) and test (∼2,500 sentences) sets. Each optimizer considered is initialized with a learning rate = 0.01. For evaluation, we consider the training loss, training categorical accuracy, CPU usage, and runtime. To evaluate the model’s accuracy in the task of dependency parsing, we use macro (sentence-based) Labelled Attachment Score (LAS) and Unlabelled Attachment Score (UAS), which provide useful information about how frequently the model correctly labels words and their relations to other words in the sentence.
        </p>
        <img src={rTwoFigOne}/>
        <p style={{fontSize: "14px"}}>Fig, 1.: <i>Comparison of SM3, Adagrad, and Adam across 10 training epochs. Upper figure shows training with batch size=64, and lower figure shows batch size=512</i></p>
         
        <h4>Experimental Results</h4>
          <p>
            We first consider the training loss over the course of 10 training steps (epochs), as shown in Fig. 1. It can be seen that the SM3-optimized models have significantly higher training loss at the end of the first few epochs, after which the results are comparable with Adam and Adagrad. In the case of small batch size (64), training loss decreases rapidly, eventually reaching the level of Adagrad and outperforming Adam. However, when training with large batch size (512), convergence is slower and significantly worse than both Adam and Adagrad.
          </p>
          <table style={{width:"50%", marginLeft: "24%"}}>
            <thead>
              <tr>
                <td>Optimizer</td>
                <td>Batch Size</td>
                <td>CPU%</td>
                <td>Runtime (mins)</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SM3</td>
                <td>64</td>
                <td>38.3</td>
                <td>8.5</td>
              </tr>
              <tr>
                <td>SGD</td>
                <td>64</td>
                <td>40.6</td>
                <td>9.1</td>
              </tr>
              <tr>
                <td>Adagrad</td>
                <td>64</td>
                <td>42.8</td>
                <td>10.3</td>
              </tr>
              <tr>
                <td>Adam</td>
                <td>64</td>
                <td>53.7</td>
                <td>13.1</td>
              </tr>
              <tr>
                <td>SM3</td>
                <td>512</td>
                <td>46.6</td>
                <td>2.8</td>
              </tr>
              <tr>
                <td>SGD</td>
                <td>512</td>
                <td>54.1</td>
                <td>3.9</td>
              </tr>
              <tr>
                <td>Adagrad</td>
                <td>512</td>
                <td>54.1</td>
                <td>3.9</td>
              </tr>
              <tr>
                <td>Adam</td>
                <td>512</td>
                <td>58.1</td>
                <td>4.0</td>
              </tr>
            </tbody>
          </table>
          <p style={{fontSize: "14px"}}>TABLE I: <i>Comparison of SM3, SGD, AdaGrad, and Adam based on CPU usage and runtime (training).</i></p>
          <p>
            We now consider the time requirements of the various optimizers. Table I shows the CPU% and runtime when training the model for 10 epochs. SM3 presents significant time savings over other optimizers, up to 25% in some cases. From the results, it is clear that SM3 is less computationally expensive than the adaptive optimizers Adam and Adagrad, and is comparable to standard SGD.
          </p>
          <table style={{width:"30%", marginLeft: "32%"}}>
            <thead>
              <tr>
                <td>Optimizer</td>
                <td>LAS</td>
                <td>UAS</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SM3</td>
                <td>0.732</td>
                <td>0.783</td>
              </tr>
              <tr>
                <td>SGD</td>
                <td>0.727</td>
                <td>0.778</td>
              </tr>
              <tr>
                <td>Adagrad</td>
                <td>0.713</td>
                <td>0.769</td>
              </tr>
              <tr>
                <td>Adam</td>
                <td>0.745</td>
                <td>0.794</td>
              </tr>
            </tbody>
          </table>
          <p style={{fontSize: "14px"}}>TABLE II: <i>Performance of SM3, SGD, AdaGrad, and Adam on test set. Metrics used are macro labelled attachment score (LAS) and macro unlabelled attachment score (UAS).</i></p>
          <p>
            Finally, we evaluate the actual performance of the models trained with different optimizers. The metrics used measure the frequency with which the model accurately labels words and identifies the parent word (’head’) in the dependency tree. Specifically, LAS measures the percentage of the time that words are assigned the correct head AND label, and UAS measures the percentage of the time that words are assigned the correct head. The dependency parser used for this task performs adequately as compared to state-of-the- art dependency parsers, which often achieve LAS and UAS values exceeding 0.900. From Table II, it can be seen that SM3 performs as well or better than other optimizers, with the exception of Adam.
          </p>
        <h4>Evaluation</h4>
        <p>
          The experiments results show that SM3 presents significant savings over the usage of CPU. For example, there’s a 28.68% reduction when compared to Adam in the case of batch size 64. This verifies the authors’ claim that SM3 has memory efficiency over other adaptive algorithms. The better utilization of memory allowed the CPU to be used more efficiently.
        </p>
        <p>  
          When we compare the losses of different algorithms, we also found that as the number of epoch increases, SM3 tends to converge to the performance of Adagrad. This is also consistent with the result shown in Proposition 1 from the paper (or Proposition 3 in section V I below) that SM3 has a convergence bound that is of the same order of magnitude as Adagrad’s.
        </p>
        <h4>Conclusion</h4>
          <p>Based on experiments with dataset, SM3 exhibits superior efficiency and performance compared to existing adaptive optimizers and SGD.</p>
        <h4>Anaylysis of SM3-I and SM3-II</h4>
        <p>Here we give a summary of the convergence properties of the algorithms and show that SM3 − II has a tighter regret bound than SM3 − I. We start with some preliminary results proved in [1, Proposition 3] and [2, Claim 2, Proposition 3].</p>
        <p><b>Proposition 1.</b><i> Assume that the loss functions</i> <InlineMath>{"\\ell_1, \\ell_2, \\cdots"}</InlineMath><i> are convex, and let </i><InlineMath>{"w_1, w_2, \\cdots"}</InlineMath><i>be the iterates generated by SM3-I or SM3-II. Let </i><InlineMath>{"H_t=diag(\\nu_t^{1/2})"}</InlineMath><i>Assume</i> <InlineMath>{"\\max_t\\Vert w_t - w^*\\Vert_\\infty^2 \\leq D."}</InlineMath><i> Then for any </i><InlineMath>{"w^* \\in \\mathbb{R}^d"}</InlineMath><i>, the regret of SM3-I or SM3-II is bounded by:</i></p> 
        <BlockMath>{"\\frac{1}{2\\eta} \\sum_{t=1}^T (\\Vert w_t-w^* \\Vert_{H_t}^2 - \\Vert w_{t+1} - w^* \\Vert_{H_t}^2) + \\frac{\\eta}{2} \\sum_{t=1}^T (\\Vert g_t\\Vert_{H_t}^*)^2"}</BlockMath>
        <p><i>where </i><InlineMath>{"\\Vert x\\Vert_H^2"}</InlineMath> <i>is defined as </i><InlineMath>{"\\sqrt{x^THx}"}</InlineMath><i> and </i><InlineMath>{"\\Vert x\\Vert_H^*"}</InlineMath><i> as </i><InlineMath>{"\\sqrt{x^Th^{-1}x}"}</InlineMath>.</p>
        <p><i>Proof.</i> See Duchi e., 2011: Propositon 3</p>
        <p><b>Proposition 2.</b> <i> For any </i><InlineMath>{"i \\in [d],"}</InlineMath><i> the sequences </i><InlineMath>{"\\nu'_1(i), \\nu'_2(i), \\cdots,"}</InlineMath><i> from SM3-II are monotonically increasing. Fix a sequence of gradients </i><InlineMath>{"g_1, g_2,\\cdots"}</InlineMath><i> we have that for all </i><InlineMath>t, i</InlineMath><i> that </i><InlineMath>{"\\sum_{s=1}^t g_s^2(i) \\leq \\nu'_t(i) \\leq \\nu_t(i)."}</InlineMath></p>
        <p><i>Proof. </i>See Anil et., 2019: Claim 2 and Proposition 3.</p>
        <p><b>Proposition 3.</b><i>Given the setup in Proposition 1, let </i><InlineMath>{"w_1, w_2,\\cdots"}</InlineMath><i> be the iterates generated by SM3-I and </i><InlineMath>{"w'_1,w'_2,\\cdots"}</InlineMath><i> be the iterates from SM3-II. Let also </i><InlineMath>{"H'_t"}</InlineMath><i> be the diagonal matrix contains the sequence values </i><InlineMath>{"\\nu'_1(i), \\nu'_2(i),\\cdots,"}</InlineMath><i> and set the learning rate </i><InlineMath>{"\\eta = D."}</InlineMath><i> Then we have the following convergence bounds for the two algorithms: </i></p>
        <BlockMath>{"\\sum_{t=1}^T (\\ell_t w'_t - \\ell_t w^*) \\leq "}</BlockMath>
        <BlockMath>{"\\frac{3D}{2} \\sum_{t=1}^d \\sqrt{\\sum_{t=1}^T \\big[ g_t^2(i) + \\min_{r:S_r \\ni i} \\max\\{\\mu'_{t-1}(r),\\nu'_{t-1}(i) \\}\\big]} "}</BlockMath>
        <BlockMath>{"\\leq \\sum_{t=1}^T (\\ell_t w_t - \\ell_t w^*) \\leq"}</BlockMath>
        <BlockMath>{"\\frac{3D}{2} \\sum_{t=1}^T \\sqrt{ \\min_{r:S_r \\ni i} \\sum_{t=1}^T \\max_{j\\in S_r} g_t^2(j)}"}</BlockMath>
        <p><i>with </i><InlineMath>{"\\mu_0(r) = \\nu_0(r) = \\mu'_0(r) = \\nu'_0(r) = 0"}</InlineMath></p>
        <p><i>Proof. </i> From Proposition 1, we have:</p>
        <BlockMath>{"\\sum_{t=1}^T (\\ell_t w_t - \\ell_t w^*) \\leq"}</BlockMath>
        <BlockMath>{"\\frac{1}{2\\eta}\\sum_{t=1}^T [\\Vert w_t - w^*\\Vert_{H_t}^2 - \\Vert w_{t+1} - w^*\\Vert_{H_t}^2] + \\frac{\\eta}{2} \\sum_{t=1}^T [\\Vert g_t\\Vert_{H_t}^*]^2"}</BlockMath>
        <p>The first term on the RHS can be bounded as follows:</p>
        <BlockMath>{"2\\eta (\\mathrm{I}) \\leq \\sum_{t=1}^T (\\nu_t^{1/2} - \\nu_{t-1}^{1/2})(w_t-w^*)^2"}</BlockMath>
        <BlockMath>{"\\leq \\sum_{t=1}^T (\\nu_t^{1/2} - \\nu_{t-1}^{1/2})(\\Vert w_t-w^*\\Vert_\\infty^2 \\cdot \\mathbb{1}_d)"}</BlockMath>
        <BlockMath>{"\\leq  D^2(\\nu_T^{1/2}\\cdot \\mathbb{1}_d = D^2 \\ \\mathrm{Tr}(H_T)"}</BlockMath>
        <p>For the second term, let <InlineMath>{"\\gamma_t(i) = \\sum_{s=1}^t g_s^2(i)"}</InlineMath> and consider the positive definite diagonal matrix <InlineMath>{"G_t = \\mathrm{diag}(\\gamma_t^{1/2})"}</InlineMath>. Use the results from [3, Lemma 2] with <InlineMath>{"\\Phi(G) = \\mathrm{Tr}(G)"}</InlineMath>, we have:</p>
        <BlockMath>{"\\sum_{t=1}^T (\\Vert g_t\\Vert_{G_t}^*)^2 \\leq \\sum_{t=1}^T (\\Vert g_t\\Vert_{G_T}^*)^2 + \\mathrm{Tr}(G_T)"}</BlockMath>
        <BlockMath>{"= \\gamma_T^{-1/2} \\cdot \\gamma_T = 2 \\ \\mathrm{Tr}(G_T)"}</BlockMath>
        <p>Now from Proposition 2, we know for all <InlineMath>{"t , H_t \\succeq H'_t \\succeq G_t."}</InlineMath> Then we have: </p>
        <BlockMath>{"\\frac{2}{\\eta}(\\mathrm{II})\\leq \\sum_{t=1}^T (\\Vert g_t\\Vert_{G_t}^*)^2 \\leq 2\\mathrm{Tr}(G_T) \\leq 2\\mathrm{Tr}(H'_T) \\leq 2\\mathrm{Tr}(H_T)"}</BlockMath>
        <p>Then we have:</p>
        <BlockMath>{"\\sum_{t=1}^T (\\ell_t w_t - \\ell_t w^*) \\leq \\Bigg( \\frac{D^2}{2\\eta} + \\eta \\Bigg) \\mathrm{Tr}(H_T) = \\frac{3}{2}D \\ \\mathrm{Tr}(H_T)"}</BlockMath>
        <BlockMath>{"\\sum_{t=1}^T (\\ell_t w'_t - \\ell_t w^*) \\leq \\frac{3}{2}D \\ \\mathrm{Tr}(H'_T) \\leq \\frac{3}{2}D \\ \\mathrm{Tr}(H_T)"}</BlockMath>
        <p>Plug in the definitions for <InlineMath>{"\\nu_T"}</InlineMath> and <InlineMath>{"\\nu'_T"}</InlineMath> we then recover then results stated in the Proposition</p>
        <h4>Bibliography</h4>
        <p>[1] J. Duchi, E. Hazan, and Y. Singer. Adaptive subgradient methods for online learning and stochastic optimization. Journal of Machine Learning Research, 12(Jul):2121–2159, 2011.</p>
        <p>[2] R. Anil, V. Gupta, T. Koren, Y. Singer. Memory-Efficient Adaptive Optimization. https://arxiv.org/abs/1901.11150.</p>
        <p>[3] V. Gupta, T. Koren, and Y. Singer. Shampoo: Precon- ditioned stochastic tensor optimization. In Proceedings of the 35th International Conference on Machine Learning, volume 80, pages 1842–1850, 2018.</p>
        <hr></hr>
        <hr></hr>
      </Route>
      </div>
    </div>
  );
};
export default App;