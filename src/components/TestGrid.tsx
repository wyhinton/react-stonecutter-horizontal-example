import React from 'react';
import isEqualWith from 'lodash.isequalwith';
//@ts-ignore
import reactBrickwork, { SpringGrid, CSSGrid,
  makeResponsive, measureItems } from //@ts-ignore
  'react-stonecutter';


const MyGrid = (): JSX.Element =>{
  let Grid = CSSGrid;
  Grid = makeResponsive(Grid, {
    maxWidth: 1920,
    minPadding: 100
});

  return(
    <div>hello</div>
  )
}
// export default class Grid extends React.Component {

//   componentWillMount() {
//     let Grid = CSSGrid;
//     Grid = makeResponsive(Grid, {
//       maxWidth: 1920,
//       minPadding: 100
//   });
//     this.setState({ Grid })
//     // this.createGrid(this.props);
//   }

//   // componentWillReceiveProps(nextProps) {
//   //   if (!isEqualWith(nextProps, this.props, (a, b, key) => {
//   //     if (key === 'children') return true;
//   //   })) {
//   //     this.createGrid(nextProps);
//   //   }
//   // }

//   // createGrid({ useCSS, measured, responsive }) {
//   //   let Grid = useCSS ? CSSGrid : SpringGrid;

//   //   if (measured) {
//   //     Grid = measureItems(Grid);
//   //   }

//   //   if (responsive) {
//   //     Grid = makeResponsive(Grid, {
//   //       maxWidth: 1920,
//   //       minPadding: 100
//   //     });
//   //   }

//   //   this.setState({ Grid });
//   // }

//   render() {
//     const { children, useCSS, responsive, layout, enterExitStyle,
//       duration, easing, stiffness, damping, gutters, columns, ...rest } = this.props;
//     const { Grid } = this.state;

//     const gridLayout = reactBrickwork.layout[layout];
//     const gridEnterExitStyle = reactBrickwork.enterExitStyle[enterExitStyle];

//     return (
//       // <div>
//       //   test
//       // </div>
//       <Grid
//         {...rest}
//         className="grid"
//         component="ul"
//         // columns={!responsive ? columns : null}
//         // columnWidth={150}
//         // gutterWidth={gutters}
//         // gutterHeight={gutters}
//         // layout={gridLayout}
//         // enter={gridEnterExitStyle.enter}
//         // entered={gridEnterExitStyle.entered}
//         // exit={gridEnterExitStyle.exit}
//         // perspective={600}
//         // duration={useCSS ? duration : null}
//         // easing={useCSS ? easing : null}
//         // springConfig={!useCSS && stiffness && damping ?
//         //   { stiffness, damping } : null}
//       >
//         {children}
//       </Grid>
//     );
//   }

// };
