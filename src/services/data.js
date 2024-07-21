import Svg, { Rect } from "react-native-svg";
const data = [
    {
      id: "1",
      name: "Movie 1",
      count: 0,
      svg: (
        <Svg height="100" width="100">
          <Rect
            width="100"
            height="100"
            stroke="black"
            strokeWidth="3"
            fill="red"
          />
        </Svg>
      ),
    },
    {
      id: "2",
      name: "Movie 2",
      count: 0,
      svg: (
        <Svg height="100" width="100">
          <Rect
            width="100"
            height="100"
            stroke="black"
            strokeWidth="3"
            fill="blue"
          />
        </Svg>
      ),
    },
    {
      id: "3",
      name: "Movie 3",
      count: 0,
      svg: (
        <Svg height="100" width="100">
          <Rect
            width="100"
            height="100"
            stroke="black"
            strokeWidth="3"
            fill="yellow"
          />
        </Svg>
      ),
    },
    {
        id: "4",
        name: "Movie 4",
        count: 0,
        svg: (
          <Svg height="100" width="100">
            <Rect
              width="100"
              height="100"
              stroke="black"
              strokeWidth="3"
              fill="orange"
            />
          </Svg>
        ),
      },
      {
        id: "5",
        name: "Movie 5",
        count: 0,
        svg: (
          <Svg height="100" width="100">
            <Rect
              width="100"
              height="100"
              stroke="black"
              strokeWidth="3"
              fill="black"
            />
          </Svg>
        ),
      },
  ];

  export default data;