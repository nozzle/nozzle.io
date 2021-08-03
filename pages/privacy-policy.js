import React from 'react'

import { H1, H3, H4, H5, P, Ul, Li } from 'components/Html'
import Head from 'components/Head'
import { angle } from 'utils/Styles'
import styled from 'styled-components'

import { Container, Center } from 'components/Layout'
import tw from 'twin.macro'

const Top = styled('section')`
  ${angle('left')};
  ${tw`text-white bg-primaryDarker py-4/100 px-5/100 mb-8`}
`
const Body = styled('div')`
  ${tw`mx-10`}

  h3,h4,h5,p,ul,li {
    ${tw`mx-0`}
  }
`

export default function Privacy() {
  return (
    <div>
      <Head title="Privacy | Nozzle" description="Privacy Policy for Nozzle." />
      <div>
        <Center>
          <Top>
            <H1>Privacy Policy</H1>
          </Top>
        </Center>
        <Body>
          <Container>
            <P>
              Your privacy is important to us. It is Nozzle&#39;s policy to
              respect your privacy and comply with any applicable law and
              regulation regarding any personal information we may collect about
              you, including across our website,{' '}
              <a tw="text-blue-500 hover:(underline)" href="https://nozzle.io">
                https://nozzle.io
              </a>
              , and other sites we own and operate.{' '}
            </P>

            <P>
              Personal information is any information about you which can be
              used to identify you. This includes information about you as a
              person (such as name, address, and date of birth), your devices,
              payment details, and even information about how you use a website
              or online service.{' '}
            </P>
            <P>
              In the event our site contains links to third-party sites and
              services, please be aware that those sites and services have their
              own privacy policies. After following a link to any third-party
              content, you should read their posted privacy policy information
              about how they collect and use personal information. This Privacy
              Policy does not apply to any of your activities after you leave
              our site.{' '}
            </P>
            <P>This policy is effective as of 3 August 2021. </P>
            <P>Last updated: 3 August 2021 </P>
            <H3>Information We Collect</H3>
            <P>
              Information we collect falls into one of two categories:
              &ldquo;voluntarily provided&rdquo; information and
              &ldquo;automatically collected&rdquo; information.{' '}
            </P>
            <P>
              &ldquo;Voluntarily provided&rdquo; information refers to any
              information you knowingly and actively provide us when using or
              participating in any of our services and promotions.{' '}
            </P>
            <P>
              &ldquo;Automatically collected&rdquo; information refers to any
              information automatically sent by your devices in the course of
              accessing our products and services.{' '}
            </P>
            <H4>Log Data</H4>
            <P>
              When you visit our website, our servers may automatically log the
              standard data provided by your web browser. It may include your
              device’s Internet Protocol (IP) address, your browser type and
              version, the pages you visit, the time and date of your visit, the
              time spent on each page, and other details about your visit.{' '}
            </P>
            <P>
              Additionally, if you encounter certain errors while using the
              site, we may automatically collect data about the error and the
              circumstances surrounding its occurrence. This data may include
              technical details about your device, what you were trying to do
              when the error happened, and other technical information relating
              to the problem. You may or may not receive notice of such errors,
              even in the moment they occur, that they have occurred, or what
              the nature of the error is.{' '}
            </P>
            <P>
              Please be aware that while this information may not be personally
              identifying by itself, it may be possible to combine it with other
              data to personally identify individual persons.{' '}
            </P>
            <H4>Personal Information</H4>
            <P>
              We may ask for personal information — for example, when you
              subscribe to our newsletter or when you contact us — which may
              include one or more of the following:{' '}
            </P>
            <Ul>
              <Li>Name</Li>
              <Li>Email</Li>
              <Li>Social media profiles</Li>
              <Li>Date of birth</Li>
            </Ul>
            <H4>Legitimate Reasons for Processing Your Personal Information</H4>
            <P>
              We only collect and use your personal information when we have a
              legitimate reason for doing so. In which instance, we only collect
              personal information that is reasonably necessary to provide our
              services to you.{' '}
            </P>
            <H4>Collection and Use of Information</H4>
            <P>
              We may collect personal information from you when you do any of
              the following on our website:{' '}
            </P>
            <Ul>
              <Li>Register for an account</Li>
              <Li>
                Sign up to receive updates from us via email or social media
                channels
              </Li>
              <Li>Use a mobile device or web browser to access our content</Li>
              <Li>
                Contact us via email, social media, or on any similar
                technologies
              </Li>
              <Li>When you mention us on social media</Li>
            </Ul>
            <P>
              We may collect, hold, use, and disclose information for the
              following purposes, and personal information will not be further
              processed in a manner that is incompatible with these purposes:{' '}
            </P>
            <Ul>
              <Li>
                to provide you with our platform's core features and services
              </Li>
              <Li>
                to enable you to customize or personalize your experience of our
                website
              </Li>
              <Li>to contact and communicate with you</Li>
              <Li>
                to enable you to access and use our website, associated
                applications, and associated social media platforms
              </Li>
              <Li>for internal record keeping and administrative purposes</Li>
              <Li>
                for technical assessment, including to operate and improve our
                app, associated applications, and associated social media
                platforms
              </Li>
            </Ul>
            <P>
              We may combine voluntarily provided and automatically collected
              personal information with general information or research data we
              receive from other trusted sources. For example, Our marketing and
              market research activities may uncover data and insights, which we
              may combine with information about how visitors use our site to
              improve our site and your experience on it.{' '}
            </P>
            <H4>Security of Your Personal Information</H4>
            <P>
              When we collect and process personal information, and while we
              retain this information, we will protect it within commercially
              acceptable means to prevent loss and theft, as well as
              unauthorized access, disclosure, copying, use, or modification.{' '}
            </P>
            <P>
              Although we will do our best to protect the personal information
              you provide to us, we advise that no method of electronic
              transmission or storage is 100% secure, and no one can guarantee
              absolute data security.{' '}
            </P>
            <P>
              You are responsible for selecting any password and its overall
              security strength, ensuring the security of your own information
              within the bounds of our services. For example, ensuring any
              passwords associated with accessing your personal information and
              accounts are secure and confidential.{' '}
            </P>
            <H4>How Long We Keep Your Personal Information</H4>
            <P>
              We keep your personal information only for as long as we need to.
              This time period may depend on what we are using your information
              for, in accordance with this privacy policy. For example, if you
              have provided us with personal information as part of creating an
              account with us, we may retain this information for the duration
              your account exists on our system. If your personal information is
              no longer required for this purpose, we will delete it or make it
              anonymous by removing all details that identify you.{' '}
            </P>
            <P>
              However, if necessary, we may retain your personal information for
              our compliance with a legal, accounting, or reporting obligation
              or for archiving purposes in the public interest, scientific, or
              historical research purposes or statistical purposes.{' '}
            </P>
            <H3>Children’s Privacy</H3>
            <P>
              We do not aim any of our products or services directly at children
              under the age of 13, and we do not knowingly collect personal
              information about children under 13.{' '}
            </P>
            <H3>Disclosure of Personal Information to Third Parties</H3>
            <P>We may disclose personal information to: </P>
            <Ul>
              <Li>a parent, subsidiary, or affiliate of our company</Li>
              <Li>
                third-party service providers for the purpose of enabling them
                to provide their services, including (without limitation) IT
                service providers, data storage, hosting and server providers,
                analytics, error loggers, debt collectors, maintenance or
                problem-solving providers, marketing providers, professional
                advisors, and payment systems operators
              </Li>
              <Li>our employees, contractors, and/or related entities</Li>
              <Li>our existing or potential agents or business partners</Li>
              <Li>
                credit reporting agencies, courts, tribunals, and regulatory
                authorities, in the event you fail to pay for goods or services
                we have provided to you
              </Li>
              <Li>
                courts, tribunals, regulatory authorities, and law enforcement
                officers, as required by law, in connection with any actual or
                prospective legal proceedings, or in order to establish,
                exercise, or defend our legal rights
              </Li>
              <Li>
                third parties, including agents or sub-contractors, who assist
                us in providing information, products, services, or direct
                marketing to you
              </Li>
              <Li>third parties to collect and process data</Li>
              <Li>
                an entity that buys, or to which we transfer all or
                substantially all of our assets and business
              </Li>
            </Ul>
            <P>Third parties we currently use include: </P>
            <Ul>
              <Li>Google Analytics</Li>
              <Li>HubSpot</Li>
            </Ul>
            <H3>International Transfers of Personal Information</H3>
            <P>
              The personal information we collect is stored and/or processed in
              United States, or where we or our partners, affiliates, and
              third-party providers maintain facilities.{' '}
            </P>
            <P>
              The countries to which we store, process, or transfer your
              personal information may not have the same data protection laws as
              the country in which you initially provided the information. If we
              transfer your personal information to third parties in other
              countries: (i) we will perform those transfers in accordance with
              the requirements of applicable law; and (ii) we will protect the
              transferred personal information in accordance with this privacy
              policy.{' '}
            </P>
            <H3>Your Rights and Controlling Your Personal Information</H3>
            <P>
              <strong>Your choice:</strong> By providing personal information to
              us, you understand we will collect, hold, use, and disclose your
              personal information in accordance with this privacy policy. You
              do not have to provide personal information to us, however, if you
              do not, it may affect your use of our website or the products
              and/or services offered on or through it.{' '}
            </P>
            <P>
              <strong>Information from third parties:</strong> If we receive
              personal information about you from a third party, we will protect
              it as set out in this privacy policy. If you are a third party
              providing personal information about somebody else, you represent
              and warrant that you have such person’s consent to provide the
              personal information to us.{' '}
            </P>
            <P>
              <strong>Marketing permission:</strong> If you have previously
              agreed to us using your personal information for direct marketing
              purposes, you may change your mind at any time by contacting us
              using the details below.{' '}
            </P>
            <P>
              <strong>Access:</strong> You may request details of the personal
              information that we hold about you.{' '}
            </P>
            <P>
              <strong>Correction:</strong> If you believe that any information
              we hold about you is inaccurate, out of date, incomplete,
              irrelevant, or misleading, please contact us using the details
              provided in this privacy policy. We will take reasonable steps to
              correct any information found to be inaccurate, incomplete,
              misleading, or out of date.{' '}
            </P>
            <P>
              <strong>Non-discrimination:</strong> We will not discriminate
              against you for exercising any of your rights over your personal
              information. Unless your personal information is required to
              provide you with a particular service or offer (for example
              providing user support), we will not deny you goods or services
              and/or charge you different prices or rates for goods or services,
              including through granting discounts or other benefits, or
              imposing penalties, or provide you with a different level or
              quality of goods or services.{' '}
            </P>
            <P>
              <strong>Downloading of Personal Information:</strong> We provide a
              means for you to download the personal information you have shared
              through our site. Please contact us for more information.{' '}
            </P>
            <P>
              <strong>Notification of data breaches:</strong> We will comply
              with laws applicable to us in respect of any data breach.{' '}
            </P>
            <P>
              <strong>Complaints:</strong> If you believe that we have breached
              a relevant data protection law and wish to make a complaint,
              please contact us using the details below and provide us with full
              details of the alleged breach. We will promptly investigate your
              complaint and respond to you, in writing, setting out the outcome
              of our investigation and the steps we will take to deal with your
              complaint. You also have the right to contact a regulatory body or
              data protection authority in relation to your complaint.{' '}
            </P>
            <P>
              <strong>Unsubscribe:</strong> To unsubscribe from our email
              database or opt-out of communications (including marketing
              communications), please contact us using the details provided in
              this privacy policy, or opt-out using the opt-out facilities
              provided in the communication. We may need to request specific
              information from you to help us confirm your identity.{' '}
            </P>
            <H3>Use of Cookies</H3>
            <P>
              We use &ldquo;cookies&rdquo; to collect information about you and
              your activity across our site. A cookie is a small piece of data
              that our website stores on your computer, and accesses each time
              you visit, so we can understand how you use our site. This helps
              us serve you content based on preferences you have specified.{' '}
            </P>
            <P>Please refer to our Cookie Policy for more information. </P>
            <H3>Business Transfers</H3>
            <P>
              If we or our assets are acquired, or in the unlikely event that we
              go out of business or enter bankruptcy, we would include data,
              including your personal information, among the assets transferred
              to any parties who acquire us. You acknowledge that such transfers
              may occur, and that any parties who acquire us may, to the extent
              permitted by applicable law, continue to use your personal
              information according to this policy, which they will be required
              to assume as it is the basis for any ownership or use rights we
              have over such information.{' '}
            </P>
            <H3>Limits of Our Policy</H3>
            <P>
              Our website may link to external sites that are not operated by
              us. Please be aware that we have no control over the content and
              policies of those sites, and cannot accept responsibility or
              liability for their respective privacy practices.{' '}
            </P>
            <H3>Changes to This Policy</H3>
            <P>
              At our discretion, we may change our privacy policy to reflect
              updates to our business processes, current acceptable practices,
              or legislative or regulatory changes. If we decide to change this
              privacy policy, we will post the changes here at the same link by
              which you are accessing this privacy policy.{' '}
            </P>
            <P>
              If the changes are significant, or if required by applicable law,
              we will contact you (based on your selected preferences for
              communications from us) and all our registered users with the new
              details and links to the updated or changed policy.{' '}
            </P>
            <P>
              If required by law, we will get your permission or give you the
              opportunity to opt in to or opt out of, as applicable, any new
              uses of your personal information.{' '}
            </P>
            <H3>
              Additional Disclosures for Australian Privacy Act Compliance (AU)
            </H3>
            <H4>International Transfers of Personal Information</H4>
            <P>
              Where the disclosure of your personal information is solely
              subject to Australian privacy laws, you acknowledge that some
              third parties may not be regulated by the Privacy Act and the
              Australian Privacy Principles in the Privacy Act. You acknowledge
              that if any such third party engages in any act or practice that
              contravenes the Australian Privacy Principles, it would not be
              accountable under the Privacy Act, and you will not be able to
              seek redress under the Privacy Act.{' '}
            </P>
            <H3>
              Additional Disclosures for General Data Protection Regulation
              (GDPR) Compliance (EU)
            </H3>
            <H4>Data Controller / Data Processor</H4>
            <P>
              The GDPR distinguishes between organisations that process personal
              information for their own purposes (known as &ldquo;data
              controllers&rdquo;) and organizations that process personal
              information on behalf of other organizations (known as &ldquo;data
              processors&rdquo;). We, Nozzle, located at the address provided in
              our Contact Us section, are a Data Controller with respect to the
              personal information you provide to us.{' '}
            </P>
            <H4>Legal Bases for Processing Your Personal Information</H4>
            <P>
              We will only collect and use your personal information when we
              have a legal right to do so. In which case, we will collect and
              use your personal information lawfully, fairly, and in a
              transparent manner. If we seek your consent to process your
              personal information, and you are under 16 years of age, we will
              seek your parent or legal guardian’s consent to process your
              personal information for that specific purpose.{' '}
            </P>
            <P>
              Our lawful bases depend on the services you use and how you use
              them. This means we only collect and use your information on the
              following grounds:{' '}
            </P>
            <H5>Consent From You</H5>
            <P>
              Where you give us consent to collect and use your personal
              information for a specific purpose. You may withdraw your consent
              at any time using the facilities we provide; however this will not
              affect any use of your information that has already taken place.
              You may consent to providing your email address for the purpose of
              receiving marketing emails from us. While you may unsubscribe at
              any time, we cannot recall any email we have already sent. If you
              have any further enquiries about how to withdraw your consent,
              please feel free to enquire using the details provided in the
              Contact Us section of this privacy policy.{' '}
            </P>
            <H5>Performance of a Contract or Transaction</H5>
            <P>
              Where you have entered into a contract or transaction with us, or
              in order to take preparatory steps prior to our entering into a
              contract or transaction with you. For example, if you contact us
              with an enquiry, we may require personal information such as your
              name and contact details in order to respond.{' '}
            </P>
            <H5>Our Legitimate Interests</H5>
            <P>
              Where we assess it is necessary for our legitimate interests, such
              as for us to provide, operate, improve and communicate our
              services. We consider our legitimate interests to include research
              and development, understanding our audience, marketing and
              promoting our services, measures taken to operate our services
              efficiently, marketing analysis, and measures taken to protect our
              legal rights and interests.{' '}
            </P>
            <H5>Compliance with Law</H5>
            <P>
              In some cases, we may have a legal obligation to use or keep your
              personal information. Such cases may include (but are not limited
              to) court orders, criminal investigations, government requests,
              and regulatory obligations. If you have any further enquiries
              about how we retain personal information in order to comply with
              the law, please feel free to enquire using the details provided in
              the Contact Us section of this privacy policy.{' '}
            </P>
            <H4>
              International Transfers Outside of the European Economic Area
              (EEA)
            </H4>
            <P>
              We will ensure that any transfer of personal information from
              countries in the European Economic Area (EEA) to countries outside
              the EEA will be protected by appropriate safeguards, for example
              by using standard data protection clauses approved by the European
              Commission, or the use of binding corporate rules or other legally
              accepted means.{' '}
            </P>
            <H4>Your Rights and Controlling Your Personal Information</H4>
            <P>
              <strong>Restrict:</strong> You have the right to request that we
              restrict the processing of your personal information if (i) you
              are concerned about the accuracy of your personal information;
              (ii) you believe your personal information has been unlawfully
              processed; (iii) you need us to maintain the personal information
              solely for the purpose of a legal claim; or (iv) we are in the
              process of considering your objection in relation to processing on
              the basis of legitimate interests.{' '}
            </P>
            <P>
              <strong>Objecting to processing:</strong> You have the right to
              object to processing of your personal information that is based on
              our legitimate interests or public interest. If this is done, we
              must provide compelling legitimate grounds for the processing
              which overrides your interests, rights, and freedoms, in order to
              proceed with the processing of your personal information.{' '}
            </P>
            <P>
              <strong>Data portability:</strong> You may have the right to
              request a copy of the personal information we hold about you.
              Where possible, we will provide this information in CSV format or
              other easily readable machine format. You may also have the right
              to request that we transfer this personal information to a third
              party.{' '}
            </P>
            <P>
              <strong>Deletion:</strong> You may have a right to request that we
              delete the personal information we hold about you at any time, and
              we will take reasonable steps to delete your personal information
              from our current records. If you ask us to delete your personal
              information, we will let you know how the deletion affects your
              use of our website or products and services. There may be
              exceptions to this right for specific legal reasons which, if
              applicable, we will set out for you in response to your request.
              If you terminate or delete your account, we will delete your
              personal information within 90 days of the deletion of your
              account. Please be aware that search engines and similar third
              parties may still retain copies of your personal information that
              has been made public at least once, like certain profile
              information and public comments, even after you have deleted the
              information from our services or deactivated your account.{' '}
            </P>
            <H3>Additional Disclosures for California Compliance (US)</H3>
            <P>
              Under California Civil Code Section 1798.83, if you live in
              California and your business relationship with us is mainly for
              personal, family, or household purposes, you may ask us about the
              information we release to other organizations for their marketing
              purposes.{' '}
            </P>
            <P>
              To make such a request, please contact us using the details
              provided in this privacy policy with &ldquo;Request for California
              privacy information&rdquo; in the subject line. You may make this
              type of request once every calendar year. We will email you a list
              of categories of personal information we revealed to other
              organisations for their marketing purposes in the last calendar
              year, along with their names and addresses. Not all personal
              information shared in this way is covered by Section 1798.83 of
              the California Civil Code.{' '}
            </P>
            <H4>Do Not Track</H4>
            <P>
              Some browsers have a &ldquo;Do Not Track&rdquo; feature that lets
              you tell websites that you do not want to have your online
              activities tracked. At this time, we do not respond to browser
              &ldquo;Do Not Track&rdquo; signals.{' '}
            </P>
            <P>
              We adhere to the standards outlined in this privacy policy,
              ensuring we collect and process personal information lawfully,
              fairly, transparently, and with legitimate, legal reasons for
              doing so.{' '}
            </P>
            <H4>Cookies and Pixels</H4>
            <P>
              At all times, you may decline cookies from our site if your
              browser permits. Most browsers allow you to activate settings on
              your browser to refuse the setting of all or some cookies.
              Accordingly, your ability to limit cookies is based only on your
              browser’s capabilities. Please refer to the Cookies section of
              this privacy policy for more information.{' '}
            </P>
            <H4>CCPA-permitted financial incentives</H4>
            <P>
              In accordance with your right to non-discrimination, we may offer
              you certain financial incentives permitted by the CCPA that can
              result in different prices, rates, or quality levels for the goods
              or services we provide.{' '}
            </P>
            <P>
              Any CCPA-permitted financial incentive we offer will reasonably
              relate to the value of your personal information, and we will
              provide written terms that describe clearly the nature of such an
              offer. Participation in a financial incentive program requires
              your prior opt-in consent, which you may revoke at any time.{' '}
            </P>
            <H4>California Notice of Collection</H4>
            <P>
              In the past 12 months, we have collected the following categories
              of personal information enumerated in the California Consumer
              Privacy Act:{' '}
            </P>
            <Ul>
              <Li>
                Identifiers, such as name, email address, phone number account
                name, IP address, and an ID or number assigned to your account.
              </Li>
              <Li>
                Customer records, such as billing and shipping address, and
                credit or debit card data.
              </Li>
            </Ul>
            <P>
              For more information on information we collect, including the
              sources we receive information from, review the &ldquo;Information
              We Collect&rdquo; section. We collect and use these categories of
              personal information for the business purposes described in the
              &ldquo;Collection and Use of Information&rdquo; section, including
              to provide and manage our Service.{' '}
            </P>
            <H4>Right to Know and Delete</H4>
            <P>
              If you are a California resident, you have rights to delete your
              personal information we collected and know certain information
              about our data practices in the preceding 12 months. In
              particular, you have the right to request the following from us:{' '}
            </P>
            <Ul>
              <Li>
                The categories of personal information we have collected about
                you;
              </Li>
              <Li>
                The categories of sources from which the personal information
                was collected;
              </Li>
              <Li>
                The categories of personal information about you we disclosed
                for a business purpose or sold;
              </Li>
              <Li>
                The categories of third parties to whom the personal information
                was disclosed for a business purpose or sold;
              </Li>
              <Li>
                The business or commercial purpose for collecting or selling the
                personal information; and
              </Li>
              <Li>
                The specific pieces of personal information we have collected
                about you.
              </Li>
            </Ul>
            <P>
              To exercise any of these rights, please contact us using the
              details provided in this privacy policy.{' '}
            </P>
            <H4>Shine the Light</H4>
            <P>
              If you are a California resident, in addition to the rights
              discussed above, you have the right to request information from us
              regarding the manner in which we share certain personal
              information as defined by California’s &ldquo;Shine the
              Light&rdquo; with third parties and affiliates for their own
              direct marketing purposes.{' '}
            </P>
            <P>
              To receive this information, send us a request using the contact
              details provided in this privacy policy. Requests must include
              &ldquo;California Privacy Rights Request&rdquo; in the first line
              of the description and include your name, street address, city,
              state, and ZIP code.{' '}
            </P>
            <H3>Contact Us</H3>
            <P>
              For any questions or concerns regarding your privacy, you may
              contact us using the following details:{' '}
            </P>
            <P>
              Derek Perkins
              <br />
              admin@nozzle.io{' '}
            </P>
          </Container>
        </Body>
      </div>
      )
    </div>
  )
}
