import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import data from '../../services/data';
import styles from './style';

const ECart = () => {
  const [list, setList] = useState(data);
  const [stand, setStand] = useState([]);
  const [summary, setSummary] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleBuy = useCallback((item) => {
    let items = { ...item, count: 1 };
    setStand((prevState) => [...prevState, items]);
  }, []);

  const incrementCount = useCallback((id) => {
    setStand((prevState) =>
      prevState.map((item) =>
        item.id === id && item.count < 6 ? { ...item, count: item.count + 1 } : item
      )
    );
  }, []);

  const decrementCount = useCallback((id) => {
    setStand((prevState) =>
      prevState.map((item) =>
        item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item
      )
    );
  }, []);

  const openSummaryModal = useCallback((item) => {
    setSummary([item]);
    setModalVisible(true);
  }, []);

  const Card = useMemo(() => ({ item }) => (
    <View style={styles.item}>
      {item.svg}
      <View style={styles.cardDetailsView}>
        <Text style={styles.itemText}>{item.name}</Text>
        <TouchableOpacity onPress={() => handleBuy(item)} style={styles.buyBtn}>
          <Text style={styles.btnStyle}>Buy now</Text>
        </TouchableOpacity>
      </View>
    </View>
  ), [handleBuy]);

  const Stand = useMemo(() => ({ item }) => (
    <View style={styles.itemStand}>
      <View style={styles.standSvgView}>{item.svg}</View>
      <View style={styles.standCard}>
        <View style={styles.standCardMain}>
          <View style={styles.standCardNameView}>
            <Text style={styles.itemTextS}>{item.name}</Text>
          </View>
          <View style={styles.standCardCountView}>
            <Text style={styles.standCountText}>{`Number of tickets: ${item?.count}`}</Text>
          </View>
          <View style={styles.standCountAddView}>
            <TouchableOpacity
              onPress={() => {
                if (item.count < 6) {
                  incrementCount(item.id);
                } else {
                  Alert.alert('Exceeded the limit !!!');
                }
              }}
              style={styles.standIncTouch}
            >
              <Text style={styles.standInCText}>{"+"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => decrementCount(item.id)} style={styles.standDecView}>
              <Text style={styles.standDecText}>{"-"}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => openSummaryModal(item)} style={styles.addCartView}>
            <Text style={styles.addCartText}>Add Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ), [incrementCount, decrementCount, openSummaryModal]);

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.movieList}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>{'Ticket Section'}</Text>
        <FlatList
          data={list}
          renderItem={Card}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.container}
        />
      </View>
      {stand.length ? (
        <View style={styles.standView}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>{'Stand Section'}</Text>
          <FlatList
            data={stand}
            renderItem={Stand}
            keyExtractor={(item) => item.id}
            horizontal={true}
            contentContainerStyle={styles.containerStand}
          />
        </View>
      ) : null}
      <Modal
        style={styles.centeredView}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalViewText}>{"Summary"}</Text>
            {summary.map((item) => (
              <View key={item.id} style={styles.summaryView}>
                {item.svg}
                <Text style={styles.textView}>{`Ticket name: ${item.name}`}</Text>
                <Text style={styles.ticketNameView}>{`Number of tickets: ${item.count}`}</Text>
              </View>
            ))}
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Payment</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ECart;
