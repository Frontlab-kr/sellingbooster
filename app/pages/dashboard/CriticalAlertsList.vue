<template>
  <Card>
    <template #title>
      <h5>절대 놓치면 안 될 한 줄 요약</h5>
    </template>
    <template #content>
      <Tabs value="0">
        <TabList>
          <Tab value="0">오늘</Tab>
          <Tab value="1">금주</Tab>
          <Tab value="2">이번달</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0"> </TabPanel>
          <TabPanel value="1"> 1 </TabPanel>
          <TabPanel value="2"> 2 </TabPanel>
        </TabPanels>
      </Tabs>
    </template>
  </Card>
</template>
