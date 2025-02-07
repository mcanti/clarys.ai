"use client";

import { useOverlay } from "@/components/overlay";

interface FooterProps {
  singleRow?: boolean;
}

const Footer: React.FC<FooterProps> = ({ singleRow = true }) => {
  const { openOverlay } = useOverlay();
  const currentDate = new Date();

  const termsAndConditionsContent = (
    <>
      <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 text-primary text-2xl font-bold font-clarys leading-normal">
            Terms & Conditions
          </div>
          <div className="w-8 h-8 p-[4.39px] justify-center items-center flex" />
        </div>

        <div
          className="containerForScrollable self-stretch flex-1 overflow-y-auto hiddenScroll"
          style={{ maxHeight: "calc(100vh - 245px - 120px)" }}
        >
          <div className="self-stretch">
            <span className="text-primary text-[14px] font-bold font-clarys leading-normal">
              GDPR & Privacy Policy
              <br />
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
              lipsum.com is committed to protecting your privacy online. This
              Privacy Policy endeavours to describe to you our practices
              regarding the personal information we collect from users on our
              website, located at lipsum.com (the “Site”), and the services
              offered through the Site. If you have any questions about our
              Privacy Policy, our collection practices, the processing of user
              information, or if you would like to report a security violation
              to us directly, please contact us at help@lipsum.com
              <br />
              Please read this policy in conjunction with the 
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys underline leading-normal">
              Freestar Privacy Policy
              <br />
              <br />
            </span>
            <span className="text-primary text-[14px] font-bold font-clarys leading-normal">
              What Data We Collect
              <br />
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
              General Data: The use of our services will automatically create
              information that will be collected. For example, when you use our
              Services, your geographic location, how you use the Services,
              information about the type of device you use, your Open Device
              Identification Number, date/time stamps for your visit, your
              unique device identifier, your browser type, operating system,
              Internet Protocol (IP) address, and domain name are all collected.
              This information is generally used to help us deliver the most
              relevant information to you and administer and improve the Site.
              <br />
            </span>
            <span className="text-primary text-[14px] font-bold font-clarys leading-normal">
              Log Files:
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
               As is true of most websites, we gather certain information
              automatically and store it in log files. This information includes
              IP addresses, browser type, Internet service provider (ISP),
              referring/exit pages, operating system, date/time stamp, and
              clickstream data. We use this information to maintain and improve
              the performance of the Services.
              <br />
            </span>
            <span className="text-primary text-[14px] font-bold font-clarys leading-normal">
              Analytics:
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
               We use analytics services (including, but not limited to, Google
              Analytics) to help analyze how users use the Site. Analytics
              services use Cookies to collect information such as how often
              users visit the Site and we use the information to improve our
              Site and Services. The analytics services&#39; ability to use and
              share information collected by them is restricted by their terms
              of use and privacy policy, which you should refer to for more
              information about how these entities use this information.
              <br />
            </span>
            <span className="text-primary text-[14px] font-bold font-clarys leading-normal">
              Location Information:
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
               If you have enabled location services on your mobile device, we
              may collect your location information to improve the Services we
              offer. If you do not want this information collected, you can
              disable location services on your device.
              <br />
            </span>
            <span className="text-primary text-[14px] font-bold font-clarys leading-normal">
              Cookies:
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
               “Cookies” are small pieces of information (text files) that a
              website sends to your computer’s hard drive while you are viewing
              the website. These text files can be used by websites to make the
              users experience more efficient. The law states that we can store
              these cookies on your device if they are strictly necessary for
              the operation of this site. For all other types of cookies we need
              your permission. To that end, this site uses different types of
              cookies. Some cookies are placed by third party services that
              appear on our pages. We and some third parties may use both
              session Cookies (which expire once you close your web browser) and
              persistent Cookies (which stay on your computer until you delete
              them) to provide you with a more personal and interactive
              experience on our Services and to market the Services or other
              products. Marketing cookies are used to track visitors across
              websites. The intention is to display ads that are relevant and
              engaging for the individual user and thereby more valuable for
              publishers and third party advertisers. This tracking is done on
              an anonymous basis and, while not an exhaustive list, some of the
              companies we work with are Google, AppNexus, Criteo, Rubicon,
              Pubmatic and DistrictM. To learn more about this practice,
              including the Self Regulatory Principles for Online Advertising,
              to which we adhere, you can visit www.aboutads.info/choices,
              optout.networkadvertising.org and www.youronlinechoices.com
              <br />
              <br />
            </span>
            <span className="text-primary text-[14px] font-bold font-clarys leading-normal">
              Use of Your Personal information
              <br />
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
              In general, personal information you submit to us is used either
              to respond to requests that you make, aid us in serving you
              better, or market our Services. We use your personal information
              in the following ways:
              <br />
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
              Operate, maintain, and improve our site(s), products, and
              services;
              <br />
              Respond to comments and questions and provide customer service;
              <br />
              Link or combine user information with other personal information
              we get from third parties, to help understand your needs and
              provide you with better service;
              <br />
              Develop, improve, and deliver marketing and advertising for the
              Services;
              <br />
              Provide and deliver products and services you request;
              <br />
              Identify you as a user in our system;
              <br />
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
              We may store and process your personal information on servers
              located in both the United States and Europe. We may also create
              anonymous data records from your personal information by
              completely excluding information (such as your name) that makes
              the data personally identifiable to you. We use this anonymous
              data to analyze request and usage patterns so that we may enhance
              the content of our Services and improve Site functionality. We
              reserve the right to use anonymous data for any purpose and
              disclose anonymous data to third parties at our sole discretion.
              <br />
              We may receive testimonials and comments from users who have had
              positive experiences with our Services. We may publish such
              content. When we publish this content, we may identify our users
              by their first and last name. We obtain the user&#39;s consent prior
              to posting this information along with the testimonial.
              <br />
              <br />
            </span>
            <span className="text-primary text-[14px] font-bold font-clarys leading-normal">
              Disclosure of Your Personal information
              <br />
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
              We disclose your personal information as described below and as
              described elsewhere in this Privacy Policy.
              <br />
              Third Parties Designated by You: When you use the Services, the
              personal information you provide will be shared with the third
              parties that you authorize to receive such information.
              <br />
            </span>
            <span className="text-primary text-[14px] font-bold font-clarys leading-normal">
              Third Party Service Providers:
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
               We may share your personal information with third party service
              providers to: provide you with the Services that we offer you
              through our Services; conduct quality assurance testing; to
              provide technical support; market the Services; and/or to provide
              other services to us.
              <br />
              Information We Share: We may disclose aggregated information about
              our users and information that does not identify any individual
              without restriction. In addition, we may disclose personal
              information that we collect or you provide:
              <br />
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
              To fulfill the purpose for which you provide it, for any other
              purpose disclosed by us when you provide the information, or with
              your consent;
              <br />
              To third parties designated by you;
              <br />
              With our subsidiaries and affiliates;
              <br />
              To third parties to process payments made through the Services;
              <br />
              With contractors, service providers and other third parties we use
              to support our business;
              <br />
              To a buyer or other successor in the event of a merger,
              divestiture, restructuring, reorganization, dissolution or other
              sale or transfer of some or all of our assets, whether as a going
              concern or as part of bankruptcy, liquidation or similar
              proceeding, in which personal information held by us about users
              is among the assets transferred; and
              <br />
            </span>
            <span className="text-primary text-[14px] font-bold font-clarys leading-normal">
              Other Disclosures:
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
               Regardless of any choices you make regarding your Personal
              information (as described below), lipsum.com may disclose Personal
              information if it believes in good faith that such disclosure is
              necessary: (i) in connection with any legal investigation; (ii) to
              comply with relevant laws or to respond to subpoenas or warrants
              served on our company; (iii) to protect or defend the rights or
              property of lipsum.com or users of the Services; and/or (iv) to
              investigate or assist in preventing any violation or potential
              violation of the law, this Privacy Policy, or our Terms of Use.
              <br />
              <br />
            </span>
            <span className="text-primary text-[14px] font-bold font-clarys leading-normal">
              Third Party Websites
              <br />
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
              Our Site may contain links to third party websites. When you click
              on a link to any other website or location, you will leave our
              Site or Services and go to another site, and another entity may
              collect personal information or anonymous data from you. We have
              no control over, do not review, and are not responsible for, these
              outside websites or their content. Please be aware that the terms
              of this Privacy Policy do not apply to these outside websites or
              content, or to any collection of your personal information after
              you click on links to such outside websites. We encourage you to
              read the privacy policies of every website you visit. The links to
              third party websites or locations are for your convenience and do
              not signify our endorsement of such third parties or their
              products, content or websites.
              <br />
              <br />
            </span>
            <span className="text-primary text-[14px] font-bold font-clarys leading-normal">
              Your Choices Regarding Information
              <br />
              Choices:
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
               We offer you choices regarding the collection, use, and sharing
              of your personal information. We may periodically send you emails
              that directly promote the use of our Services. When you receive
              promotional communications from us, you may indicate a preference
              to stop receiving further communications from us and you will have
              the opportunity to “opt-out” by following the unsubscribe
              instructions provided in the email you receive or by contacting us
              directly. Despite your indicated email preferences, we may send
              you service related communications, including notices of any
              updates to our Terms of Use or Privacy Policy.
              <br />
            </span>
            <span className="text-primary text-[14px] font-bold font-clarys leading-normal">
              Cookies:
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
               If you decide at any time that you no longer wish to accept
              cookies from our Services for any of the purposes described above,
              then you can instruct your browser, by changing its settings, to
              stop accepting cookies or to prompt you before accepting a cookie
              from the websites you visit. Consult your browser’s technical
              information. If you do not accept cookies, however, you may not be
              able to use all portions of the Services or all functionality of
              the Services. If you have any questions about how to disable or
              modify cookies, please contact us at help@lipsum.com
              <br />
            </span>
            <span className="text-primary text-[14px] font-bold font-clarys leading-normal">
              <br />
              Young People
              <br />
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
              Our Services are not directed to children under the age of 13. If
              a child under 13 submits personal information to us and we learn
              that this is the case, we will take steps to remove the personal
              information from our databases. If you believe that we might have
              any personal information from a child under 13, please contact us
              at help@lipsum.com
              <br />
              <br />
            </span>
            <span className="text-primary text-[14px] font-bold font-clarys leading-normal">
              Your Rights
              <br />
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
              As a user of our site you have the following rights, any of which
              you may exercise by contacting us at help@lipsum.com
              <br />
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
              The right to ask what personal data that we hold about you at any
              time. Extra requests (particularly repetitive) for data may result
              in a fee being charged to the user.
              <br />
              The right to ask us to update and correct any out-of-date or
              incorrect personal data that we hold about you free of charge.
              <br />
              As set out above, the right to opt out of any marketing
              communications that we may send you.
              <br />
            </span>
            <span className="text-primary text-[14px] font-normal font-clarys leading-normal">
              Further information regarding your rights can be found under:
              https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/
            </span>
          </div>
          {/*<div className="self-stretch justify-center items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
              <img
                className="w-40 h-[137.14px] border-4 border-[#ff2670]"
                src="https://via.placeholder.com/160x137"
              />
              <img
                className="w-40 h-[17.63px]"
                src="https://via.placeholder.com/160x18"
              />
            </div>
          </div>*/}
          {/*<div className="self-stretch justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 h-12 justify-start items-center gap-2 flex">
                <div className="p-4 bg-gradient-to-b from-[#dbdde0] to-[#e6e8eb] rounded-2xl shadow-inner border border-white/30 justify-center items-center gap-4 flex">
                  <div className="w-4 h-4 pl-[2.19px] pr-[1.53px] pt-[3.53px] pb-[3.06px] justify-center items-center flex" />
                </div>
                <div className="text-primary text-[14px] font-normal font-clarys leading-none">I understand</div>
              </div>
              <div className="h-12 px-8 py-4 bg-gradient-to-b from-[#e6e8eb] to-[#dbdde0] rounded-2xl shadow border border-white/30 justify-center items-center gap-2 flex">
                <div className="text-center text-primary text-[14px] font-bold font-clarys leading-[14px]">Start using Clarys.AI</div>
                <div className="w-4 h-4 px-[0.67px] py-[5.33px] justify-center items-center flex" />
              </div>
            </div>*/}
        </div>

        <div className="self-stretch justify-center items-center inline-flex">
          <div className="text-center text-primary text-[12px] font-normal font-clarys leading-3 ">
            Copyright ©{currentDate.getFullYear()}  Clarys.AI. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );

  const privacyPolicyContent = (
    <div> privacyPolicyContent</div>
  ); /*<div className="w-[920px] h-[952px] p-16 bg-[#e6e8eb] rounded-[48px] border border-white/30 flex-col justify-start items-end gap-8 inline-flex">
    <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
            <div className="grow shrink basis-0 text-primary text-2xl font-bold font-clarys leading-normal">GDPR & Privacy Policy</div>
            <div className="w-8 h-8 p-[4.39px] justify-center items-center flex" />
        </div>
        <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch"><span className="text-primary text-[14px] font-normal font-clarys leading-normal">lipsum.com is committed to protecting your privacy online. This Privacy Policy endeavours to describe to you our practices regarding the personal information we collect from users on our website, located at lipsum.com (the “Site”), and the services offered through the Site. If you have any questions about our Privacy Policy, our collection practices, the processing of user information, or if you would like to report a security violation to us directly, please contact us at help@lipsum.com<br/>Please read this policy in conjunction with the </span><span className="text-primary text-[14px] font-normal font-clarys underline leading-normal">Freestar Privacy Policy<br/></span><span className="text-primary text-[14px] font-normal font-clarys leading-normal"><br/></span><span className="text-primary text-[14px] font-bold font-clarys leading-normal">What Data We Collect<br/></span><span className="text-primary text-[14px] font-normal font-clarys leading-normal">General Data: The use of our services will automatically create information that will be collected. For example, when you use our Services, your geographic location, how you use the Services, information about the type of device you use, your Open Device Identification Number, date/time stamps for your visit, your unique device identifier, your browser type, operating system, Internet Protocol (IP) address, and domain name are all collected. This information is generally used to help us deliver the most relevant information to you and administer and improve the Site.<br/></span><span className="text-primary text-[14px] font-bold font-clarys leading-normal">Log Files:</span><span className="text-primary text-[14px] font-normal font-clarys leading-normal"> As is true of most websites, we gather certain information automatically and store it in log files. This information includes IP addresses, browser type, Internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and clickstream data. We use this information to maintain and improve the performance of the Services.<br/></span><span className="text-primary text-[14px] font-bold font-clarys leading-normal">Analytics:</span><span className="text-primary text-[14px] font-normal font-clarys leading-normal"> We use analytics services (including, but not limited to, Google Analytics) to help analyze how users use the Site. Analytics services use Cookies to collect information such as how often users visit the Site and we use the information to improve our Site and Services. The analytics services&#39; ability to use and share information collected by them is restricted by their terms of use and privacy policy, which you should refer to for more information about how these entities use this information.<br/>Location Information: If you have enabled location services on your mobile device, we may collect your location information to improve the Services we offer. If you do not want this information collected, you can disable location services on your device.<br/></span><span className="text-primary text-[14px] font-bold font-clarys leading-normal">Cookies:</span><span className="text-primary text-[14px] font-normal font-clarys leading-normal"> “Cookies” are small pieces of information (text files) that a website sends to your computer’s hard drive while you are viewing the website. These text files can be used by websites to make the users experience more efficient. The law states that we can store these cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission. To that end, this site uses different types of cookies. Some cookies are placed by third party services that appear on our pages. We and some third parties may use both session Cookies (which expire once you close your web browser) and persistent Cookies (which stay on your computer until you delete them) to provide you with a more personal and interactive experience on our Services and to market the Services or other products. Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers. This tracking is done on an anonymous basis and, while not an exhaustive list, some of the companies we work with are Google, AppNexus, Criteo, Rubicon, Pubmatic and DistrictM. To learn more about this practice, including the Self Regulatory Principles for Online Advertising, to which we adhere, you can visit www.aboutads.info/choices, optout.networkadvertising.org and www.youronlinechoices.com<br/><br/></span><span className="text-primary text-[14px] font-bold font-clarys leading-normal">Use of Your Personal information<br/></span><span className="text-primary text-[14px] font-normal font-clarys leading-normal">In general, personal information you submit to us is used either to respond to requests that you make, aid us in serving you better, or market our Services. We use your personal information in the following ways:<br/></span><span className="text-primary text-[14px] font-normal font-clarys leading-normal">Operate, maintain, and improve our site(s), products, and services;<br/>Respond to comments and questions and provide customer service;<br/>Link or combine user information with other personal information we get from third parties, to help understand your needs and provide you with better service;<br/>Develop, improve, and deliver marketing and advertising for the Services;<br/>Provide and deliver products and services you request;<br/>Identify you as a user in our system;<br/></span><span className="text-primary text-[14px] font-normal font-clarys leading-normal">We may store and process your personal information on servers located in both the United States and Europe. We may also create anonymous data records from your personal information by completely excluding information (such as your name) that makes the data personally identifiable to you. We use this anonymous data to analyze request and usage patterns so that we may enhance the content of our Services and improve Site functionality. We reserve the right to use anonymous data for any purpose and disclose anonymous data to third parties at our sole discretion.<br/>We may receive testimonials and comments from users who have had positive experiences with our Services. We may publish such content. When we publish this content, we may identify our users by their first and last name. We obtain the user&#39;s consent prior to posting this information along with the testimonial.<br/><br/></span><span className="text-primary text-[14px] font-bold font-clarys leading-normal">Disclosure of Your Personal information<br/></span><span className="text-primary text-[14px] font-normal font-clarys leading-normal">We disclose your personal information as described below and as described elsewhere in this Privacy Policy.<br/>Third Parties Designated by You: When you use the Services, the personal information you provide will be shared with the third parties that you authorize to receive such information.<br/>Third Party Service Providers: We may share your personal information with third party service providers to: provide you with the Services that we offer you through our Services; conduct quality assurance testing; to provide technical support; market the Services; and/or to provide other services to us.<br/>Information We Share: We may disclose aggregated information about our users and information that does not identify any individual without restriction. In addition, we may disclose personal information that we collect or you provide:<br/></span><span className="text-primary text-[14px] font-normal font-clarys leading-normal">To fulfill the purpose for which you provide it, for any other purpose disclosed by us when you provide the information, or with your consent;<br/>To third parties designated by you;<br/>With our subsidiaries and affiliates;<br/>To third parties to process payments made through the Services;<br/>With contractors, service providers and other third parties we use to support our business;<br/>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation or similar proceeding, in which personal information held by us about users is among the assets transferred; and<br/></span><span className="text-primary text-[14px] font-bold font-clarys leading-normal">Other Disclosures:</span><span className="text-primary text-[14px] font-normal font-clarys leading-normal"> Regardless of any choices you make regarding your Personal information (as described below), lipsum.com may disclose Personal information if it believes in good faith that such disclosure is necessary: (i) in connection with any legal investigation; (ii) to comply with relevant laws or to respond to subpoenas or warrants served on our company; (iii) to protect or defend the rights or property of lipsum.com or users of the Services; and/or (iv) to investigate or assist in preventing any violation or potential violation of the law, this Privacy Policy, or our Terms of Use.<br/><br/></span><span className="text-primary text-[14px] font-bold font-clarys leading-normal">Third Party Websites<br/></span><span className="text-primary text-[14px] font-normal font-clarys leading-normal">Our Site may contain links to third party websites. When you click on a link to any other website or location, you will leave our Site or Services and go to another site, and another entity may collect personal information or anonymous data from you. We have no control over, do not review, and are not responsible for, these outside websites or their content. Please be aware that the terms of this Privacy Policy do not apply to these outside websites or content, or to any collection of your personal information after you click on links to such outside websites. We encourage you to read the privacy policies of every website you visit. The links to third party websites or locations are for your convenience and do not signify our endorsement of such third parties or their products, content or websites.<br/><br/></span><span className="text-primary text-[14px] font-bold font-clarys leading-normal">Your Choices Regarding Information<br/></span><span className="text-primary text-[14px] font-normal font-clarys leading-normal">Choices: We offer you choices regarding the collection, use, and sharing of your personal information. We may periodically send you emails that directly promote the use of our Services. When you receive promotional communications from us, you may indicate a preference to stop receiving further communications from us and you will have the opportunity to “opt-out” by following the unsubscribe instructions provided in the email you receive or by contacting us directly. Despite your indicated email preferences, we may send you service related communications, including notices of any updates to our Terms of Use or Privacy Policy.<br/>Cookies: If you decide at any time that you no longer wish to accept cookies from our Services for any of the purposes described above, then you can instruct your browser, by changing its settings, to stop accepting cookies or to prompt you before accepting a cookie from the websites you visit. Consult your browser’s technical information. If you do not accept cookies, however, you may not be able to use all portions of the Services or all functionality of the Services. If you have any questions about how to disable or modify cookies, please contact us at help@lipsum.com<br/><br/></span><span className="text-primary text-[14px] font-bold font-clarys leading-normal">Young People<br/></span><span className="text-primary text-[14px] font-normal font-clarys leading-normal">Our Services are not directed to children under the age of 13. If a child under 13 submits personal information to us and we learn that this is the case, we will take steps to remove the personal information from our databases. If you believe that we might have any personal information from a child under 13, please contact us at help@lipsum.com<br/><br/></span><span className="text-primary text-[14px] font-bold font-clarys leading-normal">Your Rights<br/></span><span className="text-primary text-[14px] font-normal font-clarys leading-normal">As a user of our site you have the following rights, any of which you may exercise by contacting us at help@lipsum.com<br/></span><span className="text-primary text-[14px] font-normal font-clarys leading-normal">The right to ask what personal data that we hold about you at any time. Extra requests (particularly repetitive) for data may result in a fee being charged to the user.<br/>The right to ask us to update and correct any out-of-date or incorrect personal data that we hold about you free of charge.<br/>As set out above, the right to opt out of any marketing communications that we may send you.<br/></span><span className="text-primary text-[14px] font-normal font-clarys leading-normal">Further information regarding your rights can be found under: https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/</span></div>
            <div className="self-stretch justify-center items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
                    <img className="w-40 h-[137.14px] border-4 border-[#ff2670]" src="https://via.placeholder.com/160x137" />
                    <img className="w-40 h-[17.63px]" src="https://via.placeholder.com/160x18" />
                </div>
            </div>
            <div className="self-stretch justify-start items-start gap-8 inline-flex">
                <div className="grow shrink basis-0 h-12 justify-start items-center gap-2 flex">
                    <div className="p-4 bg-gradient-to-b from-[#dbdde0] to-[#e6e8eb] rounded-2xl shadow-inner border border-white/30 justify-center items-center gap-4 flex">
                        <div className="w-4 h-4 pl-[2.19px] pr-[1.53px] pt-[3.53px] pb-[3.06px] justify-center items-center flex" />
                    </div>
                    <div className="text-primary text-[14px] font-normal font-clarys leading-none">I understand</div>
                </div>
                <div className="h-12 px-8 py-4 bg-gradient-to-b from-[#e6e8eb] to-[#dbdde0] rounded-2xl shadow border border-white/30 justify-center items-center gap-2 flex">
                    <div className="text-center text-primary text-[14px] font-bold font-clarys leading-[14px]">Start using Clarys.AI</div>
                    <div className="w-4 h-4 px-[0.67px] py-[5.33px] justify-center items-center flex" />
                </div>
            </div>
        </div>
    </div>
    <div className="self-stretch justify-between items-start inline-flex">
        <div className="text-center text-primary text-xs font-normal font-clarys leading-3">Copyright ©2024 Clarys.AI. All rights reserved.</div>
    </div>
</div>*/

  const termsConditionsPrivacyBar = (
    <div className="justify-center items-center gap-4 inline-flex">
      <div className="rounded-2xl justify-center items-center gap-2 flex leading-3">
        <div
          onClick={() => openOverlay(termsAndConditionsContent)}
          className="text-center text-primary text-[12px] font-normal font-clarys leading-3 cursor-pointer"
        >
          Terms & Conditions
        </div>
      </div>
      <div className="rounded-2xl justify-center items-center gap-2 flex leading-3">
        <div
          onClick={() => openOverlay(privacyPolicyContent)}
          className="text-center text-primary text-[12px] font-normal font-clarys leading-3 cursor-pointer"
        >
          Privacy Policy
        </div>
      </div>
    </div>
  );

  const copyrightBar = (
    <div className="text-center text-primary text-[12px] font-normal font-clarys leading-3">
      Copyright ©{currentDate.getFullYear()} Clarys.AI. All rights reserved.
    </div>
  );

  return (
    <>
      {!singleRow && (
        <div className="self-stretch flex-col justify-start items-center gap-4 flex leading-3">
          {termsConditionsPrivacyBar}
          {copyrightBar}
        </div>
      )}
      {singleRow && (
        <div className="self-stretch flex-row justify-between items-center gap-4 flex leading-3">
          {copyrightBar}
          {termsConditionsPrivacyBar}
        </div>
      )}
    </>
  );
};
export default Footer;
