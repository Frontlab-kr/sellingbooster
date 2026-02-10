<template>
  <div class="sb-dashboard">
    <div class="grid">
      <div class="col-12">
        <Overview />
      </div>
      <div class="col-6">
        <SalesPerformanceCard />
      </div>
      <div class="col-6">
        <CriticalAlertsList />
      </div>
      <div class="col-6">
        <SEOPerformanceTracker />
      </div>
      <div class="col-6">
        <PricingOptimizationGuide />
      </div>
      <div class="col-12">
        <MarketOpportunityAnalysis />
      </div>
      <div class="col-6">
        <WeeklyActionStrategy />
      </div>
      <div class="col-6">
        <LiveTrendInsights />
      </div>
      <div class="col-6">
        <PersonalizedKeywords />
      </div>
      <div class="col-6">
        <OpportunityLossRanking />
      </div>
      <div class="col-6">
        <ChannelPerformanceReport />
      </div>
      <div class="col-12">
        <Banner />
      </div>
    </div>
  </div>
</template>

<script setup>
import Overview from './Overview.vue';
import SalesPerformanceCard from './SalesPerformanceCard.vue';
import CriticalAlertsList from './CriticalAlertsList.vue';
import SEOPerformanceTracker from './SEOPerformanceTracker.vue';
import PricingOptimizationGuide from './PricingOptimizationGuide.vue';
import MarketOpportunityAnalysis from './MarketOpportunityAnalysis.vue';
import WeeklyActionStrategy from './WeeklyActionStrategy.vue';
import LiveTrendInsights from './LiveTrendInsights.vue';
import PersonalizedKeywords from './PersonalizedKeywords.vue';
import OpportunityLossRanking from './OpportunityLossRanking.vue';
import ChannelPerformanceReport from './ChannelPerformanceReport.vue';
import Banner from './Banner.vue';
</script>
