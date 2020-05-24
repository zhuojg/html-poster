function col_vis(id, height, width, color) {
    const data = [{
            genre: '语文',
            sold: Math.round(Math.random() * 20)
        },
        {
            genre: '数学',
            sold: Math.round(Math.random() * 20)
        },
        {
            genre: '英语',
            sold: Math.round(Math.random() * 20)
        },
        {
            genre: '综合',
            sold: Math.round(Math.random() * 20)
        },
    ];

    // Step 1: 创建 Chart 对象
    const chart = new G2.Chart({
        container: id, // 指定图表容器 ID
        width: width, // 指定图表宽度
        height: height, // 指定图表高度
    });

    // Step 2: 载入数据源
    chart.data(data);

    // Step 3：创建图形语法，绘制柱状图
    chart.interval()
        .position('genre*sold')
        .color(color)

    // Step 4: 渲染图表
    // G2.registerTheme('html-poster', {
    //     defaultColor: 'red',
    // });
    // chart.theme('html-poster');
    chart.render(true);
}

function area_vis(id, height, width, color) {
    const data = [{
            month: '1',
            value: Math.round(Math.random() * 20)
        },
        {
            month: '2',
            value: Math.round(Math.random() * 20)
        },
        {
            month: '3',
            value: Math.round(Math.random() * 20)
        },
        {
            month: '4',
            value: Math.round(Math.random() * 20)
        },
        {
            month: '5',
            value: Math.round(Math.random() * 20)
        },
        {
            month: '6',
            value: Math.round(Math.random() * 20)
        },
        {
            month: '7',
            value: Math.round(Math.random() * 20)
        },
        {
            month: '8',
            value: Math.round(Math.random() * 20)
        },
        {
            month: '9',
            value: Math.round(Math.random() * 20)
        },
    ];

    const chart = new G2.Chart({
        container: id,
        height: height,
        width: width
    });
    chart.data(data);
    chart.scale({
        value: {
            max: 25,
            min: 0
        },
        month: {
            formatter: val => `${val}`
        }
    });


    chart.area().position('month*value').color(color).style({
        fillOpacity: 0.3,
    });
    chart.line().position('month*value').color(color);
    // 分段颜色
    chart.annotation().regionFilter({
        top: true,
        color: color
    });

    chart.render();
}

function bar_vis(id, height, width, color) {
    const data = [
        {
            city: '综合',
            type: '优秀',
            value: 0.18
        },
        {
            city: '综合',
            type: '良好',
            value: 0.66
        },
        {
            city: '综合',
            type: '加油',
            value: 0.16
        },
        {
            city: '英语',
            type: '优秀',
            value: 0.12
        },
        {
            city: '英语',
            type: '良好',
            value: 0.4
        },
        {
            city: '英语',
            type: '加油',
            value: 0.48
        },
        {
            city: '数学',
            type: '优秀',
            value: 0.05
        },
        {
            city: '数学',
            type: '良好',
            value: 0.8
        },
        {
            city: '数学',
            type: '加油',
            value: 0.15
        },
        {
            city: '语文',
            type: '优秀',
            value: 0.1
        },
        {
            city: '语文',
            type: '良好',
            value: 0.53
        },
        {
            city: '语文',
            type: '加油',
            value: 0.36
        },
    ];

    const chart = new G2.Chart({
        container: id,
        height: height,
        width: width
    });
    chart.data(data);
    chart.scale('value', {

        alias: '占比（%）',
    });
    chart.axis('city', {
        tickLine: null,
        line: null,
    });
    chart.axis('value', {
        label: null,
        title: {
            style: {
                fontSize: 14,
                fontWeight: 300,
            },
        },
        grid: null,
    });
    chart.legend({
        position: 'top',
    });
    chart.coordinate('rect').transpose();
    chart.tooltip({
        shared: true,
        showMarkers: false,
    });
    chart.interaction('active-region');
    chart
        .interval()
        .adjust('stack')
        .position('city*value')
        .color('type*city', (type, city) => {
            if (type === '优秀' || type === '优秀') {
                return color;
            }
            if (type === '良好' || type === '良好') {
                return '#bec4c9';
            }
            if (type === '加油' || type === '加油') {
                return '#d0d2d3';
            }
        })
        .size(26)
        .label('value*type', (val, t) => {
            const color = t === '首都人口' ? 'white' : '#47494b';
            if (val < 0.05) {
                return null;
            }
            return {
                position: 'middle',
                offset: 0,
                style: {
                    fontSize: 12,
                    fill: color,
                    lineWidth: 0,
                    stroke: null,
                    shadowBlur: 2,
                    shadowColor: 'rgba(0, 0, 0, .45)',
                },
            };
        });
    chart.render();
}

function range_area_vis(id, height, width, color) {
    const data = [{
            time: 1,
            temperature: [50, 145]
        },
        {
            time: 2,
            temperature: [51,142]
        },
        {
            time: 3,
            temperature: [40, 140]
        },
        {
            time: 4,
            temperature: [45, 141]
        },
        {
            time: 5,
            temperature: [50, 150]
        },
        {
            time: 6,
            temperature: [60, 139]
        },
        {
            time: 7,
            temperature: [45, 144]
        },
        {
            time: 8,
            temperature: [70, 148]
        },
        {
            time: 9,
            temperature: [66, 146]
        },
    ];

    const averages = [{
            time: 1,
            temperature: 90
        },
        {
            time: 2,
            temperature: 85
        },
        {
            time: 3,
            temperature: 100
        },
        {
            time: 4,
            temperature: 103
        },
        {
            time: 5,
            temperature: 95
        },
        {
            time: 6,
            temperature: 88
        },
        {
            time: 7,
            temperature: 102
        },
        {
            time: 8,
            temperature: 105
        },
        {
            time: 9,
            temperature: 108
        },
    ];

    const chart = new G2.Chart({
        container: id,
        height: height,
        width: width
    });

    chart.scale({
        temperature: {
            sync: true,
            // nice: true,
        },
        time: {
            sync: true,
            // nice: true,
        },
    });
    chart.tooltip({
        shared: true,
        showMarkers: false,
        showCrosshairs: true
    });

    const v1 = chart.createView({
        padding: 32
    });
    v1.data(data);
    v1.scale('temperature', {
        alias: '温度区间'
    });
    v1.area()
        .position('time*temperature').color(color);

    const v2 = chart.createView({
        padding: 32
    });
    v2.data(averages);
    v2.axis(false);
    v2.scale('temperature', {
        alias: '平均温度'
    });
    v2.line().position('time*temperature').color(color);
    v2.point()
        .position('time*temperature')
        .color(color)
        .size(4)
        .shape('circle')
        .style({
            stroke: color,
            lineWidth: 1,
            fillOpacity: 1,
        });

    chart.render();

}

function bubble_vis(id, height, width, color) {
    const data = [{
            x: 95,
            y: 95,
            z: 13.8,
            name: 'BE',
            country: 'Belgium'
        },
        {
            x: 86.5,
            y: 102.9,
            z: 14.7,
            name: 'DE',
            country: 'Germany'
        },
        {
            x: 80.8,
            y: 91.5,
            z: 15.8,
            name: 'FI',
            country: 'Finland'
        },
        {
            x: 80.4,
            y: 102.5,
            z: 12,
            name: 'NL',
            country: 'Netherlands'
        },
        {
            x: 80.3,
            y: 86.1,
            z: 11.8,
            name: 'SE',
            country: 'Sweden'
        },
        {
            x: 78.4,
            y: 70.1,
            z: 16.6,
            name: 'ES',
            country: 'Spain'
        },
        {
            x: 74.2,
            y: 68.5,
            z: 14.5,
            name: 'FR',
            country: 'France'
        },
        {
            x: 73.5,
            y: 83.1,
            z: 10,
            name: 'NO',
            country: 'Norway'
        },
        {
            x: 71,
            y: 93.2,
            z: 24.7,
            name: 'UK',
            country: 'United Kingdom'
        },
        {
            x: 69.2,
            y: 57.6,
            z: 10.4,
            name: 'IT',
            country: 'Italy'
        },
        {
            x: 68.6,
            y: 20,
            z: 16,
            name: 'RU',
            country: 'Russia'
        },
        {
            x: 65.5,
            y: 126.4,
            z: 35.3,
            name: 'US',
            country: 'United States'
        },
        {
            x: 65.4,
            y: 50.8,
            z: 28.5,
            name: 'HU',
            country: 'Hungary'
        },
        {
            x: 63.4,
            y: 51.8,
            z: 15.4,
            name: 'PT',
            country: 'Portugal'
        },
        {
            x: 64,
            y: 82.9,
            z: 31.3,
            name: 'NZ',
            country: 'New Zealand'
        }
    ];
    const chart = new G2.Chart({
        container: id,
        height: height,
        width: width,
        // padding: [20, 20, 50, 80],
    });
    chart.data(data);
    chart.scale({
        x: {
            tickInterval: 5, // 自定义刻度间距
            max: 96, // 自定义最大值
            min: 62 // 自定义最小是
        },
        y: {
            tickInterval: 50,
            max: 165,
            min: 0
        },
        z: {
        }
    });
    // 开始配置坐标轴
    chart.axis('x', {
        label: {
            formatter: val => {
                return val; // 格式化坐标轴显示文本
            }
        },
        grid: {
            line: {
                style: {
                    stroke: '#d9d9d9',
                    lineWidth: 1,
                    lineDash: [2, 2]
                }
            }
        }
    });
    chart.axis('y', {
        label: {
            formatter: val => {
                if (+val > 0) {
                    return val;
                }
            }
        }
    });
    chart.legend(false);
    chart.tooltip({
        title: 'country',
        showMarkers: false
    });
    chart
        .point()
        .position('x*y')
        .color(color)
        .size('z', [10, 40])
        .label('name*country', {
            offset: 0, // 文本距离图形的距离
            style: {
                fill: color,
                stroke: '#fff',
                lineWidth: 1,
            }
        })
        .shape('circle')
        .tooltip('x*y*z')
        .style({
            lineWidth: 1,
            stroke: color,
            fillOpacity: 0.3,
        });
    chart.annotation().region({
        start: ['0%', '0%'],
        end: ['100%', '100%'],
        style: {
            lineWidth: 1,
            fillOpacity: 0,
            strokeOpacity: 1,
            stroke: color,
        }
    });

    chart.interaction('element-active');

    chart.render();
}

function gause_vis(id, height, width, color) {
    // 极坐标下的柱状图
    // 构造数据
    const data1 = [];
    for (let i = 0; i < 50; i++) {
        data1.push({
            type: i + '',
            value: 10,
        });
    }

    var pos = Math.round(Math.random() * 50)
    const data2 = [];
    for (let i = 0; i < 50; i++) {
        const item = {};
        item.type = i + '';
        item.value = 10;
        if (i === pos) {
            item.value = 14;
        }
        if (i > pos) {
            item.value = 0;
        }
        data2.push(item);
    }

    const chart = new G2.Chart({
        container: id,
        height: height,
        width: width,
        padding: 0,
    });
    chart.scale({
        type: {
            range: [0, 1],
        },
        value: {
            sync: true,
        },
    });
    chart.legend(false);
    chart.tooltip(false);

    const view1 = chart.createView();
    view1.data(data1);
    view1.axis(false);
    view1.coordinate('polar', {
        startAngle: (-9 / 8) * Math.PI,
        endAngle: (1 / 8) * Math.PI,
        innerRadius: 0.75,
        radius: 0.8,
    });
    view1
        .interval()
        .position('type*value')
        .color('#CBCBCB')
        .size(6);

    const view3 = chart.createView();
    view3.data(data2);
    view3.axis(false);
    view3.coordinate('polar', {
        startAngle: (-9 / 8) * Math.PI,
        endAngle: (1 / 8) * Math.PI,
        innerRadius: 0.75,
        radius: 0.8,
    });
    view3
        .interval()
        .position('type*value')
        .color('value', color)
        .size(6);

    view3.annotation().text({
        position: ['50%', '65%'],
        content: Math.round(pos / 50 * 100),
        style: {
            fill: '#232323',
            fontSize: 48,
            textAlign: 'center',
            textBaseline: 'middle',
        },
    });

    chart.render();
}

function line_vis(id, height, width, color) {
    const data = [
        { year: '1991', value: Math.round(Math.random() * 10) },
        { year: '1992', value: Math.round(Math.random() * 10) },
        { year: '1993', value: Math.round(Math.random() * 10) },
        { year: '1994', value: Math.round(Math.random() * 10) },
        { year: '1995', value: Math.round(Math.random() * 10) },
        { year: '1996', value: Math.round(Math.random() * 10) },
        { year: '1997', value: Math.round(Math.random() * 10) },
        { year: '1998', value: Math.round(Math.random() * 10) },
        { year: '1999', value: Math.round(Math.random() * 10) },
      ];
      const chart = new G2.Chart({
        container: id,
        height: height,
        width: width
      });
      
      chart.data(data);
      chart.scale({
        year: {
          range: [0, 1],
        },
        value: {
          min: 0,
          nice: true,
        },
      });
      
      chart.tooltip({
        showCrosshairs: true, // 展示 Tooltip 辅助线
        shared: true,
      });
      
      chart.line().position('year*value').label('value').color(color);
      chart.point().position('year*value').color(color);
      
      chart.render();
}

function pie_vis(id, height, width, color) {
    const data = [
        { sex: '达标', sold: 0.45 },
        { sex: '未达标', sold: 0.55 },
      ];
      
      const chart = new G2.Chart({
        container: id,
        height: height,
        width: width
      });
      
      chart.coordinate('theta', {
        radius: 0.8,
      });
      
      chart.data(data);
      
      chart.tooltip({
        showTitle: false,
        showMarkers: false,
      });
      
      chart
        .interval()
        .adjust('stack')
        .position('sold')
        .color('sex', ['#9a9a9a', color]);
      
      chart.interaction('element-active');
      
      chart.render();
}