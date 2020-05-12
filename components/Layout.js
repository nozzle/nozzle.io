import styled from 'styled-components'
//
import Color from 'utils/Color'

export const Container = styled('div')`
  flex: 1;
  width: 100%;
  max-width: ${props => props.theme.maxWidth}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export const Pad = styled('div')`
  padding: ${props => props.size || 20}px;
`

export const Center = styled('div')`
  text-align: center;
`

export const Header = styled('div')`
  background: radial-gradient(
    circle at center,
    ${props => props.theme.colors.primaryDarker} 20%,
    ${props => Color(props.theme.colors.primaryDarker).darken(7).toString()}
  );
  color: white;
  padding: 2rem;
  text-align: center;
`

export const SubMenu = styled('div')`
  display: block;
  text-align: center;
  margin: 0 auto;
  padding: 2rem 0;

  li {
    display: inline-block;
  }

  a {
    display: inline-block;
    background: rgba(0, 0, 0, 0.4);
    padding: 0.7rem;
    margin: 0.2rem;
    border-radius: 0.3rem;
    transition: all 0.2s ease-out;

    :hover {
      background: ${props => props.theme.colors.primary};
    }
  }
`

export const SidebarWrapper = styled(Container)`
  flex: 1;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  flex-direction: row;
`

export const Sidebar = styled('div')`
  flex: 0 0 250px;
  min-width: 0;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;

  a {
    display: block;
    padding: 0.7rem 0.7rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
`
export const SidebarContent = styled('div')`
  flex: 1;
  min-width: 0;
  padding: 1rem 1rem 0;
`

export const BlogContainer = styled(Container)`
  display: flex;
`
