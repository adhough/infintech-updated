
import React from 'react';
import '../App.css';
import { Button } from './ArticlesButton';
import './FXMarket.css';
import FXMarket from './images/FXmarket.jpeg'

function FXMarketSection() {
  return (
    <div className='fxmarket-container'>

    <div className='project-btns'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    >
      ARTICLES
      </Button>

      </div>

    <img src={FXMarket} alt="fx"></img>
      <div className='fx-article-container'>

<h1>Foreign Exchange: Background and Opportunities</h1>
<h3>(Published September 2020)</h3>
<br />
<p>Ten years ago, I analysed and reported the market risk exposure and profit and loss for the Foreign Exchange (FX) desk at a leading Investment Bank.  It is a really fascinating market because so many factors can lead to changes in FX rates.  With daily transaction volumes in the trillions, the FX market is the largest financial market in the world. Participants include governments, banks, international corporations, hedge funds and individual investors. Over the last decade, this market has also been disrupted by new technology and Fintech platforms.
</p>
<br />
<p>
In this article I explore how the FX Market has evolved and what are the challenges that need to be overcome to make it cheaper, faster, safer and more transparent. I present highlights from a correlation analysis where I looked for relationships between economic data and FX rates. Also, a much broader range of companies and investors - beyond just Investment Banks, Hedge Funds and Multinationals - will hold assets in foreign countries and I introduce a model which will help them to manage their FX Risk (<a href="https://fxriskmodel.herokuapp.com/" target="_blank" rel="noreferrer">https://fxriskmodel.herokuapp.com/</a>).
</p>
<br />
<p>
<b>Background</b>
</p>
<br />
<p>
The FX market has been around for as long as trade has taken place between countries and regions which hold different currencies. In medieval Italy, fortunes were made in money lending and currency trading. A church ban on charging interest led bankers, known as the Lombards, to lend money in one currency and then adjust the FX rate to accommodate for interest.  In the 19th century, the major currencies in the world, such as the British Pound, German Mark and US Dollar were backed by gold. With the onset of the Great Depression and World War Two, major economies moved off the gold standard. After World War Two, the Bretton Woods Agreement established a fixed exchange rate system where major European currencies were pegged to the US Dollar, making it the reserve currency of the world.
</p>
<br />
<p>
The Bretton Woods system started to break down in the late 1960’s due to rising US inflation and gold convertibility was suspended in 1968. In the late 1970’s major European economies agreed to maintain exchange rates which led to the establishment of the Exchange Rate Mechanism. In 1992, the Quantum Hedge Fund took short positions in the British Pound, believing it was overvalued, which forced the United Kingdom to leave the Exchange Rate Mechanism and this led to the exchange rate trading bands changing from 2.25% to 15%[1]. This move to a more floating exchange rate system in Europe led to demands to establish a single currency and the Euro went live at the start of 1999.
</p>
<br />
<p>
<b>Peer-to-Peer Platforms</b>
</p>
<br />
<p>
The last decade has seen the emergence of Fintechs offering more competitive FX rates, a wider range of products and lower fees. There has been a focus on Cross Border Payments which involves transferring funds to a recipient located in a different jurisdiction. Fintechs, such as TransferWise and Kantox, offer their clients Peer-to-Peer (P2P) platforms. These services cut out the middle man and enable users, located around the world, to trade between themselves. For example, imagine an Australian living in the UK, who needs to make regular payments (such as mortgage payments) in Australian dollars. Using the P2P platforms, they could search for someone in Australia who needs to make similar payments in British pounds, agree on FX rates and when and to which accounts the payments will take place (the Australian-based party makes payments in Australian Dollars and the UK-based party makes the payments in British Pounds). This model is most commonly used for currencies such as the US Dollar, Euros and Yen, where there are always people looking to exchange currencies, but it is more difficult for currencies that are traded less and where parties want to exchange large amounts.
</p>
<br />
<p>
<b>Cross-Border Payments</b>
</p>
<br />
<p>
P2P platforms are not accessible to all firms and individuals who need to make cross-border payments. According to the World Bank, the cost of making cross-border payments is on average 7% and there is a wide dispersion depending on the locations of the sender and recipient. A United Nations ‘Sustainable Development Goal’ is to reduce the cost of remittances to 3% by 2030[2].
</p>
<br />
<p>
Factors such as time for dispute resolution, reconciliations, slow processes, operational opening times and compliance checks (such as checks for money laundering) lead to delays. Compliance checks can occur several times for one payment as it moves along a payment chain. Different processes, sanction lists and databases can lead to delays and rejections of payments. The lack of standardisation of systems, messaging and processing standards limits the ability to process payments more efficiently[3]. Governments and Regulators need to collaborate and promote more consistent international rules and standards.  Companies involved in Cross-Border payments need to migrate from legacy platforms and increase the operational hours of clearing and settling these payments.
</p>
<br />
<p>
<b>Correlation Analysis</b>
</p>
<br />
<p>
With the rise in e-commerce and the increasing mobility of people and capital combined with an increasing range of banking services available (please see 'What is Open Banking?'), more small-medium sized enterprises (SME) and individual investors will hold larger amounts of assets outside of their home location.  They will need to understand, manage and possibly hedge their FX risk exposures. To look for relationships between economic data and currencies, I undertook correlation analysis using economic data from the IMF, OECD & World Bank (please see <a href="https://fxriskmodel.herokuapp.com/corr" target="_blank" rel="noreferrer">https://fxriskmodel.herokuapp.com/corr</a>). I looked at the FX rates from the perspective of a UK-based investor who holds a portfolio of currency positions in Australian Dollars (AUD), Canadian Dollars (CAD), Swiss Francs (CHF), Euros (EUR), Japanese Yen (JPY), New Zealand Dollars (NZD) and US Dollars (USD). Correlations were calculated using the percentage change over time.
</p>
<br />
<p>
My first finding was that many of the currencies were moderately positively correlated with other currencies.  AUDGDP with NZDGDP, CADGDP with USDGDP and CHFGDP with EURGDP currency movements highlight how closely these economies are integrated. In fact, the Swiss Franc is often more sensitive to changes in French and German economic data than the Euro.
</p>
<br />
<p>
Correlations between FX rates and interest rates were not strong, however there was moderate negative correlation between JPYGBP FX rate and UK and US long term interest rates[4]. Japan is a safe haven so at times of economic stress investors buy Japanese assets, whilst more optimistic investors buy assets in the likes of the UK and US.  This can also be seen in the strong negative correlation between US GBP (PPP) and JPY[5].
</p>
<br />
<p>
OECD Energy Supply[6], G20 Oil production[7] and German inland freight[8] are all negatively correlated with CHFGBP and EURGBP. We need to assess whether these changes in the economy are impacting exchange rates or vice-versa. For example, I believe that demand for importing energy can have a material impact on FX rates whilst changes in freight are more likely a result of firms and individuals changing their demand for imported goods due to changes in FX rates. The ability of German firms to successfully export their manufactured goods is assisted with depreciations in the Euro. This is demonstrated by the strong negative correlation between German Industry as a percentage of GDP[9] and the EURGBP.
</p>
<br />
<p>
There was moderate positive correlation between Chinese Industry as a percentage of GBP[10] and AUDGBP, CADGBP and NZDGBP. When China prioritised investing in infrastructure through to 2011, Australia, Canada and New Zealand exported raw materials to China and their currencies appreciated strongly against other currencies such as GBP.
</p>
<br />
<p>
<b>FX Risk Model</b>
</p>
<br />
<p>
The above examples selected had the strongest correlations in my analysis. It is very difficult to find relationships between economic data and changes in FX rates.  Many movements in FX rates appear random.  With this in mind, I believe that SMEs and individuals holding a portfolio of foreign currencies should manage their FX Risk exposure by using a Value at Risk (VaR) model using the historical simulation method (with over 15 years of FX rate data). I have developed a website with this model (<a href="https://fxriskmodel.herokuapp.com/" target="_blank" rel="noreferrer">https://fxriskmodel.herokuapp.com/</a>) where the user can input their AUD, CAD, CHF, EUR, JPY, NZD & USD asset amounts. The model then returns the value of their portfolio using the close of business FX rates and estimates the worst possible one-day loss of the portfolio using 95% and 99% confidence intervals. ﻿This model is measuring the FX risk and not other risk factors such as equity, interest or credit risk. An extreme event could lead to losses much larger than estimated by this model. Please contact me with any feedback about this website.
</p>
<br />
<p>
Global Co-operation between Governments, Regulators, Financial Services and Fintechs is required to reduce the cost of Cross-Border payments and to meet consumer demand for seamless, transparent and real-time processing. The World Bank estimated in 2018 that 77% of remittances went to low/middle income countries and that these payments are common during times of crisis, such as natural disasters[11]. Reducing the costs of remittances can help get more money into the hands of people who need it. Making these payments faster, cheaper and more transparent will support economic growth, international trade, global development and financial inclusion.  We also need to look at developing new digital tools to help the growing numbers of SMEs and individual investors who will need to manage their FX Risk exposures.


</p>
<br />
<br />
<br />
<p>
<b>Disclaimer</b>
</p>
<br />
<p>
This article is for information purposes only and is not intended as financial or investment advice. The data and information used is correct to the best of my knowledge and as such it is possible there are errors or an absence of key information. Any action you take based upon the information in this article is strictly at your own risk.
</p>
<br />
<p>[1] Weithers, Timothy, ‘Foreign Exchange: A Practical Guide to the FX Markets’, United States, Wiley, 2006
</p>
<p>
[2] The World Bank (2019), ‘Record High Remittances Sent Globally in 2018’, Press Release No. 2019/148
</p>
<p>
[3] Ibid.
</p>
<p>
[4] OECD (2020), Long-term interest rates (indicator). doi: 10.1787/662d712c-en (Accessed on 06 September 2020)
</p>
<p>
[5] The World Bank (2020), World Development Indicators - GDP, PPP(current international $), (Accessed on September 2020)
</p>
<p>
[6] OECD (2020), "Primary energy supply" (indicator), https://doi.org/10.1787/1b33c15a-en (accessed on 07 September 2020)
</p>
<p>
[7] OECD (2020), Crude oil production (indicator). doi: 10.1787/4747b431-en (Accessed on 07 September 2020)
</p>
<p>
[8] OECD (2020), Freight transport (indicator). doi: 10.1787/708eda32-en (Accessed on 07 September 2020)
</p>
<p>
[9] The World Bank (2020), Industry (including Construction), value added (% of GDP), CC BY-4.0, (Accessed on September 2020)
</p>
<p>
[10] Ibid.
</p>
<p>
[11] The World Bank (2019), ‘Record High Remittances Sent Globally in 2018’, Press Release No. 2019/148

</p>
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

export default FXMarketSection;
