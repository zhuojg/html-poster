function col_vis(id, height, width, color) {
    const data = [{
            genre: 'Sports',
            sold: 275
        },
        {
            genre: 'Strategy',
            sold: 115
        },
        {
            genre: 'Action',
            sold: 120
        },
        {
            genre: 'Shooter',
            sold: 350
        },
        {
            genre: 'Other',
            sold: 150
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
            value: 1078
        },
        {
            month: '2',
            value: 1216
        },
        {
            month: '3',
            value: 758
        },
        {
            month: '4',
            value: 623
        },
        {
            month: '5',
            value: 319
        },
        {
            month: '6',
            value: 422
        },
        {
            month: '7',
            value: -4
        },
        {
            month: '8',
            value: -217
        },
        {
            month: '9',
            value: -358
        },
        {
            month: '10',
            value: 1513
        },
        {
            month: '11',
            value: 1388
        },
        {
            month: '12',
            value: 597
        }
    ];

    const chart = new G2.Chart({
        container: id,
        height: height,
        width: width
    });
    chart.data(data);
    chart.scale({
        value: {
            max: 2000,
            min: -1000
        },
        month: {
            formatter: val => `${val} 月`
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
    const data = [{
            city: '中国（北京）',
            type: '首都人口',
            value: 0.01
        },
        {
            city: '中国（北京）',
            type: '城市人口',
            value: 0.53
        },
        {
            city: '中国（北京）',
            type: '农村人口',
            value: 0.46
        },
        {
            city: '美国（华盛顿）',
            type: '首都人口',
            value: 0.01
        },
        {
            city: '美国（华盛顿）',
            type: '城市人口',
            value: 0.8
        },
        {
            city: '美国（华盛顿）',
            type: '农村人口',
            value: 0.19
        },
        {
            city: '印度（德里）',
            type: '首都人口',
            value: 0.02
        },
        {
            city: '印度（德里）',
            type: '城市人口',
            value: 0.3
        },
        {
            city: '印度（德里）',
            type: '农村人口',
            value: 0.68
        },
        {
            city: '俄罗斯（莫斯科）',
            type: '首都人口',
            value: 0.08
        },
        {
            city: '俄罗斯（莫斯科）',
            type: '城市人口',
            value: 0.66
        },
        {
            city: '俄罗斯（莫斯科）',
            type: '农村人口',
            value: 0.26
        },
        {
            city: '法国（巴黎）',
            type: '首都人口',
            value: 0.16
        },
        {
            city: '法国（巴黎）',
            type: '城市人口',
            value: 0.63
        },
        {
            city: '法国（巴黎）',
            type: '农村人口',
            value: 0.21
        },
        {
            city: '韩国（首尔）',
            type: '首都人口',
            value: 0.19
        },
        {
            city: '韩国（首尔）',
            type: '城市人口',
            value: 0.63
        },
        {
            city: '韩国（首尔）',
            type: '农村人口',
            value: 0.18
        },
        {
            city: '丹麦（哥本哈根）',
            type: '首都人口',
            value: 0.22
        },
        {
            city: '丹麦（哥本哈根）',
            type: '城市人口',
            value: 0.65
        },
        {
            city: '丹麦（哥本哈根）',
            type: '农村人口',
            value: 0.13
        },
        {
            city: '冰岛（雷克雅未克）',
            type: '首都人口',
            value: 0.56
        },
        {
            city: '冰岛（雷克雅未克）',
            type: '城市人口',
            value: 0.38
        },
        {
            city: '冰岛（雷克雅未克）',
            type: '农村人口',
            value: 0.06
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
            if (type === '首都人口') {
                return color;
            }
            if (type === '城市人口') {
                return '#ced4d9';
            }
            if (type === '农村人口') {
                return '#f0f2f3';
            }
            if (type === '首都人口' && city === '中国（北京）') {
                return color;
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