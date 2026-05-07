<template>
  <div class="sb-guide">
    <div class="sb-guide-head">
      <h1>Graph / Chart (그래프)</h1>
      <p>
        그래프는 복잡한 수치 데이터를 시각적으로 구조화하여 성과와 추세를
        직관적으로 전달하는 도구다. <br />
        정보의 성격에 따라 막대, 선, 파이 등 적절한 형태를 선택하며, 데이터의
        계층을 컬러와 굵기로 구분하여 사용자가 핵심 인사이트를 빠르게 도출할 수
        있도록 돕는다.
      </p>
    </div>
    <div class="sb-guide-body">
      <div class="sb-guide-light">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>분석 레벨 그래프(마켓트렌드)</h2>
            <h6>각 해당되는 화면에서 사용 가능합니다.</h6>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h4>시장분석 그래프</h4>
            <h6>시장 분석 리포트에 요약화면에서만 사용 가능합니다.</h6>
          </div>
          <div class="flex gap-8">
            <div class="flex gap-4 p-4">
              <div class="flex flex-column gap-2 align-items-center">
                <div>
                  <Badge value="매우 나쁨" severity="danger" />
                </div>
                <SbChartWave :percent="10" />
              </div>
              <div class="flex flex-column gap-2 align-items-center">
                <div>
                  <Badge value="나쁨" severity="warn" />
                </div>
                <SbChartWave :percent="30" />
              </div>
              <div class="flex flex-column gap-2 align-items-center">
                <div>
                  <Badge value="보통" severity="info" />
                </div>
                <SbChartWave :percent="50" />
              </div>
              <div class="flex flex-column gap-2 align-items-center">
                <div>
                  <Badge value="좋음" severity="secondary" />
                </div>
                <SbChartWave :percent="70" />
              </div>
              <div class="flex flex-column gap-2 align-items-center">
                <div>
                  <Badge value="매우 좋음" severity="success" />
                </div>
                <SbChartWave :percent="90" />
              </div>
            </div>
            <div class="flex gap-4 p-4 bg-gray-800">
              <div class="flex flex-column gap-2 align-items-center">
                <div>
                  <Badge value="매우 나쁨" severity="danger" />
                </div>
                <SbChartWave :percent="10" />
              </div>
              <div class="flex flex-column gap-2 align-items-center">
                <div>
                  <Badge value="나쁨" severity="warn" />
                </div>
                <SbChartWave :percent="30" />
              </div>
              <div class="flex flex-column gap-2 align-items-center">
                <div>
                  <Badge value="보통" severity="info" />
                </div>
                <SbChartWave :percent="50" />
              </div>
              <div class="flex flex-column gap-2 align-items-center">
                <div>
                  <Badge value="좋음" severity="secondary" />
                </div>
                <SbChartWave :percent="70" />
              </div>
              <div class="flex flex-column gap-2 align-items-center">
                <div>
                  <Badge value="매우 좋음" severity="success" />
                </div>
                <SbChartWave :percent="90" />
              </div>
            </div>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h4>시장분석 그래프</h4>
            <h6>시장 분석 리포트에 요약화면에서만 사용 가능합니다.</h6>
          </div>
          <div class="flex flex-column gap-4">
            <div class="sb-trend-evaluation-chart">
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGauge :score="10" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGauge :score="30" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGauge :score="50" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGauge :score="70" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGauge :score="90" />
              </div>
            </div>
            <div class="sb-trend-evaluation-chart bg-gray-800">
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGauge :score="10" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGauge :score="30" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGauge :score="50" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGauge :score="70" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGauge :score="90" />
              </div>
            </div>
            <div class="sb-trend-evaluation-chart">
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGaugeFace :score="10" label="키워드" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGaugeFace :score="30" label="키워드" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGaugeFace :score="50" label="키워드" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGaugeFace :score="70" label="키워드" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGaugeFace :score="90" label="키워드" />
              </div>
            </div>
            <div class="sb-trend-evaluation-chart bg-gray-800 p-dark">
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGaugeFace :score="10" label="키워드" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGaugeFace :score="30" label="키워드" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGaugeFace :score="50" label="키워드" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGaugeFace :score="70" label="키워드" />
              </div>
              <div class="sb-trend-evaluation-chart-item">
                <SbChartGaugeFace :score="90" label="키워드" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'guide',
});
</script>
