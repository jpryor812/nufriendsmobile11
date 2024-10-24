import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const MessageStatsChart = () => {
  const data = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S','S'],
    datasets: [{
      data: [13, 48, 38, 42, 11, 69, 57]
    }]
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
      <Text style={styles.subtitle}>Messages sent</Text>
      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          width={Dimensions.get('window').width - 64} // Adjust padding as needed
          height={180}
          chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            style: {
              borderRadius: 12
            }
          }}
          bezier // Makes the line curved
          style={{
            borderRadius: 12
          }}
          withInnerLines={false}
          withOuterLines={true}
          withDots={true}
          withShadow={false}
          fromZero={true}
          yAxisInterval={1} // optional, defaults to 1
          segments={5} // Number of horizontal lines
          renderDotContent={({ x, y, index }) => (
            <Text
              key={index}
              style={{
                position: 'absolute',
                top: y - 20,
                left: x - 8,
                fontSize: 10,
                color: '#8641F4'
              }}
            >
              {data.datasets[0].data[index]}
            </Text>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    marginBottom: 8,
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