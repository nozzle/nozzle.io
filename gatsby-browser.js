const React = require('react')
const { Transition } = require('react-move')

// exports.componentRenderer = ({currentPage, previousPage}) => {
//   console.log(currentPage, previousPage)
//   return (
//     <Transition
//       data={previousPage ? [
//         currentPage,
//         previousPage
//       ]: [currentPage]}
//       getKey={d => d.location.pathname}
//       enter={d => ({
//         transform: `translateX(100%)`,
//         opacity: 1,
//         zIndex: 1,
//         boxShadow: '0 0 20px 0 rgba(0,0,0,0)',
//       })}
//       update={d => ({
//         transform: `translateX(0%)`,
//         opacity: 1,
//         zIndex: 0,
//         boxShadow: '0 0 100px 0 rgba(0,0,0,.5)'
//       })}
//       leave={d => ({
//         transform: `translateX(-33%)`,
//         opacity: .8,
//         zIndex: 0,
//       })}
//       ignore={['zIndex']}
//       duration={700}
//       easing='easeCubicInOut'
//     >
//       {nodes => (
//         <div>
//           {nodes.map(node => {
//             const { component: Component, ...rest } = node.data
//             return <div key={node.key} style={{
//               position: 'absolute',
//               left: 0,
//               right: 0,
//               top: 0,
//               bottom: 0,
//               background: 'white',
//               ...node.state
//             }}>
//               <Component {...rest} />
//             </div>
//           })}
//         </div>
//       )}
//     </Transition>
//   )
// }
