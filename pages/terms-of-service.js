import React from 'react'

import { H1, H3, P, Ol, Li } from 'components/Html'
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

  h3,p,ol,li {
    ${tw`mx-0`}
  }
`

export default function TermsOfService() {
  return (
    <div>
      <Head
        title="Terms of Service | Nozzle"
        description="Terms of Service for Nozzle."
      />
      <div>
        <Center>
          <Top>
            <H1>Terms of Service</H1>
          </Top>
        </Center>
        <Body>
          <Container>
            <P>
              These Terms of Service govern your use of the website located at{' '}
              <a tw="text-blue-500 hover:(underline)" href="https://nozzle.io">
                https://nozzle.io
              </a>{' '}
              and any related services provided by Nozzle.{' '}
            </P>
            <P>
              By accessing{' '}
              <a tw="text-blue-500 hover:(underline)" href="https://nozzle.io">
                https://nozzle.io
              </a>
              , you agree to abide by these Terms of Service and to comply with
              all applicable laws and regulations. If you do not agree with
              these Terms of Service, you are prohibited from using or accessing
              this website or using any other services provided by Nozzle.{' '}
            </P>
            <P>
              We, Nozzle, reserve the right to review and amend any of these
              Terms of Service at our sole discretion. Upon doing so, we will
              update this page. Any changes to these Terms of Service will take
              effect immediately from the date of publication.{' '}
            </P>
            <P>These Terms of Service were last updated on 3 August 2021. </P>
            <H3>Limitations of Use</H3>
            <P>
              By using this website, you warrant on behalf of yourself, your
              users, and other parties you represent that you will not:{' '}
            </P>
            <Ol>
              <Li>
                modify, copy, prepare derivative works of, decompile, or reverse
                engineer any materials and software contained on this website;
              </Li>
              <Li>
                remove any copyright or other proprietary notations from any
                materials and software on this website;
              </Li>
              <Li>
                transfer the materials to another person or “mirror” the
                materials on any other server;
              </Li>
              <Li>
                knowingly or negligently use this website or any of its
                associated services in a way that abuses or disrupts our
                networks or any other service Nozzle provides;
              </Li>
              <Li>
                use this website or its associated services to transmit or
                publish any harassing, indecent, obscene, fraudulent, or
                unlawful material;
              </Li>
              <Li>
                use this website or its associated services in violation of any
                applicable laws or regulations;
              </Li>
              <Li>
                use this website in conjunction with sending unauthorized
                advertising or spam;
              </Li>
              <Li>
                harvest, collect, or gather user data without the user’s
                consent; or
              </Li>
              <Li>
                use this website or its associated services in such a way that
                may infringe the privacy, intellectual property rights, or other
                rights of third parties.
              </Li>
            </Ol>
            <H3 tw="mx-0">Intellectual Property</H3>
            <P>
              The intellectual property in the materials contained in this
              website are owned by or licensed to Nozzle and are protected by
              applicable copyright and trademark law. We grant our users
              permission to download one copy of the materials for personal,
              non-commercial transitory use.{' '}
            </P>
            <P>
              This constitutes the grant of a license, not a transfer of title.
              This license shall automatically terminate if you violate any of
              these restrictions or the Terms of Service, and may be terminated
              by Nozzle at any time.{' '}
            </P>
            <H3>Liability</H3>
            <P>
              Our website and the materials on our website are provided on an
              'as is' basis. To the extent permitted by law, Nozzle makes no
              warranties, expressed or implied, and hereby disclaims and negates
              all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property,
              or other violation of rights.{' '}
            </P>
            <P>
              In no event shall Nozzle or its suppliers be liable for any
              consequential loss suffered or incurred by you or any third party
              arising from the use or inability to use this website or the
              materials on this website, even if Nozzle or an authorized
              representative has been notified, orally or in writing, of the
              possibility of such damage.{' '}
            </P>
            <P>
              In the context of this agreement, &ldquo;consequential loss&rdquo;
              includes any consequential loss, indirect loss, real or
              anticipated loss of profit, loss of benefit, loss of revenue, loss
              of business, loss of goodwill, loss of opportunity, loss of
              savings, loss of reputation, loss of use and/or loss or corruption
              of data, whether under statute, contract, equity, tort (including
              negligence), indemnity, or otherwise.{' '}
            </P>
            <P>
              Because some jurisdictions do not allow limitations on implied
              warranties, or limitations of liability for consequential or
              incidental damages, these limitations may not apply to you.{' '}
            </P>
            <H3>Accuracy of Materials</H3>
            <P>
              The materials appearing on our website are not comprehensive and
              are for general information purposes only. Nozzle does not warrant
              or make any representations concerning the accuracy, likely
              results, or reliability of the use of the materials on this
              website, or otherwise relating to such materials or on any
              resources linked to this website.{' '}
            </P>
            <H3>Links</H3>
            <P>
              Nozzle has not reviewed all of the sites linked to its website and
              is not responsible for the contents of any such linked site. The
              inclusion of any link does not imply endorsement, approval, or
              control by Nozzle of the site. Use of any such linked site is at
              your own risk and we strongly advise you make your own
              investigations with respect to the suitability of those sites.{' '}
            </P>
            <H3>Right to Terminate</H3>
            <P>
              We may suspend or terminate your right to use our website and
              terminate these Terms of Service immediately upon written notice
              to you for any breach of these Terms of Service.{' '}
            </P>
            <H3>Severance</H3>
            <P>
              Any term of these Terms of Service which is wholly or partially
              void or unenforceable is severed to the extent that it is void or
              unenforceable. The validity of the remainder of these Terms of
              Service is not affected.{' '}
            </P>
            <H3>Governing Law</H3>
            <P>
              These Terms of Service are governed by and construed in accordance
              with the laws of Utah, USA. You irrevocably submit to the
              exclusive jurisdiction of the courts in that State or location.{' '}
            </P>
          </Container>
        </Body>
      </div>
    </div>
  )
}
