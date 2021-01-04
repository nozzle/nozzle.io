import styled from 'styled-components'
import tw from 'twin.macro'
//
import Color from 'utils/Color'

export const Container = styled('div')`
  ${tw`w-full mx-auto flex flex-col`}
  flex: 1;
  max-width: ${props => props.theme.maxWidth}px;
`

export const Pad = styled('div')`
  padding: ${props => props.size || 20}px;
`

export const Center = styled('div')`
  ${tw`text-center`}
`

export const Header = styled('div')`
  ${tw`text-white p-8 text-center`}
  background: radial-gradient(
    circle at center,
    ${props => props.theme.colors.primaryDarker} 20%,
    ${props => Color(props.theme.colors.primaryDarker).darken(7).toString()}
  );
`

export const SubMenu = styled('div')`
  ${tw`block text-center mx-auto`}
  padding: 2rem 0;

  li {
    ${tw`inline-block`}
  }

  a {
    ${tw`inline-block rounded-sm m-1 p-3`}
    background: rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease-out;

    :hover {
      ${tw`bg-primary`}
    }
  }
`

export const SidebarWrapper = styled(Container)`
  ${tw`mx-auto flex items-stretch flex-row`}
  flex: 1;
`

export const Sidebar = styled('div')`
  ${tw`min-w-0 pt-4`}
  flex: 0 0 250px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  a {
    ${tw`block`}
    padding: 0.7rem 0.7rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
`
export const SidebarContent = styled('div')`
  ${tw`min-w-0`}
  flex: 1;
  padding: 1rem 1rem 0;
`

export const BlogContainer = styled(Container)`
  ${tw`flex`}
`
