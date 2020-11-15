
import React from 'react';
import '../App.css';
import { Button } from './ArticlesButton';
import './OpenBanking.css';
import London from './images/London.jpg'

function OpenBankingSection() {
  return (
    <div className='openbanking-container'>

    <div className='project-btns'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    >
      ARTICLES
      </Button>

      </div>

    <img src={London} alt="london"></img>
      <div className='open-article-container'>

<h1>What is Open Banking?</h1>
<h3>(First published July 2020)</h3>
<br />
<p>Over the last few decades, banks have not been disrupted to the same degree which industries such as media and retail have experienced.  Many consumers had their bank accounts set up when they were a child and then go on to use their bank’s products and services for the majority of their financial needs. This near monopoly over transaction history made it difficult for customers to actively seek out better financial deals and has resulted in minimal competition between banks.  Regulators around the world are encouraging Open Banking to increase competition and promote innovation and it is set to revolutionise financial services. However, what is Open Banking and how will it impact consumers, banks and Fintech start-ups over the coming years?
</p>
<br />
<p>
The key technology which enables Open Banking is the Application Programming Interface (or API) which allows developers to build applications which connect business processes, services, content and data in a straight-forward and secure way. Developers can access services and resources in real-time from other pieces of software which they did not build.
</p>
<br />
<p>
After receiving consent from the consumer, third-party firms can access data held at the bank, such as current account transactions. Using this data, third-party firms can develop cheaper, time-saving and more user-friendly products. Consumers will also take more control of their data and understand its value – they can see who is using their data and have the authority to permit, refuse and revoke access. It will also be easier for consumers to compare the fees and the performance of banks, transfer their accounts, manage payments and conduct transactions through other banks and non-banks.
</p>
<br />
<p>
The opportunity for more financial service providers to access historical data will lead to more competition for credit products, such as personal loans. New entrants will be able to analyse historical transaction data which was previously only accessible by the consumer’s bank. There will also be more personalised comparison between the products and services of different providers. We will see a change in the business model of retail banks from being the sole provider of financial products and services to operating a market-place where consumers can compare alternatives from a wider range of providers.
</p>
<br />
<p>
The UK and EU have been the pioneers in Open Banking Regulation. The ‘Competition and Markets Authority’ (CMA) in the UK and the second ‘Payment Services Directive’ (PSD2) in the EU enables customers to allow approved third-parties to access their data for free. Banks in the UK have been required by law to comply since January 2018 and in the EU since September 2019. Australia followed the lead of the UK and EU in legislating for Open Banking but included an additional measure to ensure that Fintechs also share data with banks. Other countries are encouraging Open Banking by taking a more ‘market-friendly’ approach, such as Singapore, where banks are not required by law to share their data. In Singapore, banks and Fintechs experiment and develop new products and services and then check the suitability with regulators.  When comparing the regulatory approaches made by Europe and Singapore, it is too early to determine which will lead to the best outcomes for consumers. It will likely depend more on factors such as how tech savvy consumers are and how keen they are for greater choice.
</p>
<br />
<p>
Banks previously covered all aspects of the value chain – from origination and servicing, through to risk and balance sheet management. The future ecosystem will be a complex mix of competition and collaboration between banks and Fintechs. Banks will decide which customer segments, products, services and risk profiles they want to focus on and whether to build applications in-house or partner with start-ups. In the scenario where banks and Fintech start-ups collaborate, banks will compete on being the preferred partner. For products and services where banks do not have a competitive edge or it is outside their risk appetite, banks can look to maintain the customer relationship and offer third-party options via a marketplace.
</p>
<br />
<p>
Open Banking has the potential to transform Retail Banking and consumers are set to benefit from increased competition and innovation. To succeed in this new environment, banks and Fintechs need to develop a culture of experimentation, understand the needs and preferences of their consumers to a deeper degree and regularly test which product and service mix they need to be focusing on. Beyond ease of use, ensuring the security and reliability of the new platforms will be key factors for building customer trust.</p>

    </div>
    <div className='project-btns'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    >
      ARTICLES
      </Button>

      </div>

      </div>
  );
}

export default OpenBankingSection;
