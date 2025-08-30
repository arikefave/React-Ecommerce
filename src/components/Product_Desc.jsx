import React from "react";

const Product_Desc = () => {
  return (
    <section className="px-5 lg:px-[400px] min-h-screen py-10 lg:py-0">
      {/* share */}
      <div className="flex items-center justify-center gap-2">
        <p>Share</p>
        <div className="flex space-x-1.5">
          <div className="bg-[#F0F0F0] p-0.5 w-[34px] h-[34px] flex items-center justify-center">
            <img src="/fbook_icon.svg" alt="icon" />
          </div>
          <div className="bg-[#F0F0F0] p-0.5 w-[34px] h-[34px] flex items-center justify-center">
            <img src="/x_icon.svg" alt="icon" />
          </div>
          <div className="bg-[#F0F0F0] p-0.5 w-[34px] h-[34px] flex items-center justify-center">
            <img src="/ytube_icon.svg" alt="icon" />
          </div>
          <div className="bg-[#F0F0F0] p-0.5 w-[34px] h-[34px] flex items-center justify-center">
            <img src="/google_icon.svg" alt="icon" />
          </div>
        </div>
      </div>
      {/* product dts 01 */}
      <div className="mt-5 lg:mt-0">
        <img src="/innerPgPr01.svg" alt="product" />
        <div className="font-light text-sm text-cBlack space-y-10 my-8">
          <p>It’s a tricky thing, being a wedding guest.</p>
          <p>
            Among the endless list of requirements – buy a present, arrange
            accommodation, practise your small talk – there’s one obligation
            that trumps them all in terms of effort: fix up and look sharp.
          </p>
          <p>
            The rules surrounding wedding guest dressing are as nuanced as they
            come.
          </p>
          <p>
            There are some obvious musts – avoiding white is always a good idea
            – and others that are only acknowledged by serial wedding-goers,
            such as steering clear of stilettos unless you enjoy the feeling of
            numbness in your feet.
          </p>
          <p>
            In the summer, things get even more complicated. Not only do you
            have to find a sweat-free way to “dress to the nines”, but you have
            to strike the right balance between playful sunshine garb and formal
            occasionwear. This forces you to ask difficult questions, such as
            “Is this wrap dress more ‘I do’ or ‘BBQ?’” and “Does this hat make
            me look like a chic French woman, or a dishevelled bird?”
          </p>
          <p>
            It’s no mean feat, so here’s our handy guide to summer wedding guest
            dressing, with tips from industry experts on the trends and colours
            you need to know about this season .
          </p>
        </div>
      </div>
      {/* product dts 02 */}
      <div>
        <img src="/innerPgPr02.svg" alt="product" />
        <h2 className="text-4xl font-light text-cBlack mt-7">
          Related Products
        </h2>
        <div className="font-light text-sm text-cBlack space-y-10 my-8">
          <p>It’s a tricky thing, being a wedding guest.</p>
          <p>
            Among the endless list of requirements – buy a present, arrange
            accommodation, practise your small talk – there’s one obligation
            that trumps them all in terms of effort: fix up and look sharp.
          </p>
          <p>
            The rules surrounding wedding guest dressing are as nuanced as they
            come.
          </p>
          <p>
            There are some obvious musts – avoiding white is always a good idea
            – and others that are only acknowledged by serial wedding-goers,
            such as steering clear of stilettos unless you enjoy the feeling of
            numbness in your feet.
          </p>
          <p>
            In the summer, things get even more complicated. Not only do you
            have to find a sweat-free way to “dress to the nines”, but you have
            to strike the right balance between playful sunshine garb and formal
            occasionwear. This forces you to ask difficult questions, such as
            “Is this wrap dress more ‘I do’ or ‘BBQ?’” and “Does this hat make
            me look like a chic French woman, or a dishevelled bird?”
          </p>
          <p>
            It’s no mean feat, so here’s our handy guide to summer wedding guest
            dressing, with tips from industry experts on the trends and colours
            you need to know about this season .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Product_Desc;
