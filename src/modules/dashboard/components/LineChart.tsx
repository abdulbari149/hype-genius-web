import React, { useEffect, useRef, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
	Chart,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
	ChartArea,
	ChartData,
} from 'chart.js'
Chart.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
)

type Props = {
	data: {
		label: string
		labels: string[]
		values: number[]
	}
}

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
	const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top)

	gradient.addColorStop(0, 'rgba(90, 221, 149, 0.288)')
	gradient.addColorStop(0.3, 'rgba(106, 240, 166, 0.336)')
	gradient.addColorStop(0.5, 'rgba(104, 218, 155, 0.363)')
	gradient.addColorStop(0.8, 'rgba(91, 202, 141, 0.342)')
	gradient.addColorStop(1, 'rgba(84, 204, 139, 0.35)')

	return gradient
}

const LineChart: React.FC<Props> = ({ data }) => {
	const chartRef = useRef<Chart<'line'>>(null)
	const [chartData, setChartData] = useState<ChartData<'line'>>({
		datasets: [
			{
				data: data.values,
				fill: true,
				borderColor: '#54CC8B',
				backgroundColor: {},
				tension: 0.6,
			},
		],
		labels: data.labels,
	})

	useEffect(() => {
		const chart = chartRef.current

		if (!chart) {
			return
		}

		const data = {
			...chartData,
			datasets: chartData.datasets.map((dataset) => ({
				...dataset,
				backgroundColor: createGradient(chart.ctx, chart.chartArea),
			})),
		}

		setChartData(data)
	}, [])
	return (
		<Line
			ref={chartRef}
			data={chartData}
			options={{
				maintainAspectRatio: false,
				responsive: true,
				spanGaps: false,
				layout: {
					autoPadding: true,
				},
				plugins: {
					legend: {
						display: false,
					},
					tooltip: {
						enabled: true,
						position: 'nearest',
						backgroundColor: '#0f0f',
						bodyColor: '#0f1ac9',
						mode: 'nearest',
						callbacks: {
							title: () => 'title',
							label: (item) => item.parsed + '%',
						},
					},
				},
				scales: {
					x: {
						ticks: {
							display: false,
						},
						grid: {
							display: false,
						},
						border: {
							display: false,
						},
						axis: 'x',
					},
					y: {
						border: {
							display: false,
						},
						grid: {
							display: false,
						},
						ticks: {
							display: false,
						},
						axis: 'y',
					},
				},
				elements: {
					point: {
						radius: 0,
					},
				},
			}}
		/>
	)
}

export default LineChart
