import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryArea, VictoryScatter, VictoryContainer } from 'victory-native';

const MessageStatsChart = () => {
  const data = [
    { x: 'S', y: 13 },
    { x: 'M', y: 48 },
    { x: 'T', y: 38 },
    { x: 'W', y: 42 },
    { x: 'T', y: 11 },
    { x: 'F', y: 69 },
    { x: 'S', y: 57 }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
      <Text style={styles.subtitle}>Messages sent</Text>
      <View style={styles.chartContainer}>
        <VictoryChart
          height={250}
          padding={{ top: 20, bottom: 40, left: 40, right: 40 }}
          containerComponent={<VictoryContainer responsive={true} />}
        >
          {/* Area under the line */}
          <VictoryArea
            data={data}
            style={{
              data: {
                fill: "rgba(134, 65, 244, 0.2)",
              }
            }}
            interpolation="natural"
          />
          
          {/* Main line */}
          <VictoryLine
            data={data}
            style={{
              data: {
                stroke: "rgb(134, 65, 244)",
                strokeWidth: 2
              }
            }}
            interpolation="natural"
          />
          
          {/* Data points */}
          <VictoryScatter
            data={data}
            size={5}
            style={{
              data: {
                fill: "white",
                stroke: "rgb(134, 65, 244)",
                strokeWidth: 2
              }
            }}
            labels={({ datum }) => datum.y}
            labelComponent={
              <Text style={{ fontSize: 12, color: '#666' }} />
            }
          />
          
          {/* X-axis (days) */}
          <VictoryAxis
            tickFormat={(t) => t}
            style={{
              axis: { stroke: "#ccc" },
              tickLabels: { fontSize: 12, padding: 5 }
            }}
          />
          
          {/* Y-axis (values) */}
          <VictoryAxis
            dependentAxis
            style={{
              axis: { stroke: "#ccc" },
              grid: { stroke: "#f0f0f0" },
              tickLabels: { fontSize: 12, padding: 5 }
            }}
          />
        </VictoryChart>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f7fa',
    padding: 16,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2d3748',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 12,
    color: '#4a5568',
  },
  chartContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  }
});

export default MessageStatsChart;