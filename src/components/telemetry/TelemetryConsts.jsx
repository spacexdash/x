export const DEFAULT_CONFIG = {
    enablePoints: false,
    margin: { top: 20, right: 30, bottom: 30, left: 50 },
    useMesh: true,
    colors: { scheme: "purpleRed_green" },
    xScale: { type: 'linear', min: 'auto', max: 'auto' },
    yScale: { type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false },
    legends:[
        {
            anchor: 'top-right',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
        }
    ]
}
export const MIN_CHART_HEIGHT = '200px';