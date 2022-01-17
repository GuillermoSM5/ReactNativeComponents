import React, {FunctionComponent, useContext} from 'react';
import {SectionList, Text, View} from 'react-native';
import HeaderTitle from '../Components/HeaderTitle';
import ItemSeparator from '../Components/ItemSeparator';
import {ThemeContext} from '../Context/themeContext/ThemeContext';
import {styles} from '../Theme/appTheme';

interface CustomSectionListProps {}

interface Casas {
  casa: string;
  data: string[];
}

const CustomSectionList: FunctionComponent<CustomSectionListProps> = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const casas: Casas[] = [
    {
      casa: 'DC Comics',
      data: [
        'Batman',
        'Superman',
        'Robin',
        'Batman',
        'Superman',
        'Robin',
        'Batman',
        'Superman',
        'Robin',
        'Batman',
        'Superman',
        'Robin',
        'Batman',
        'Superman',
        'Robin',
      ],
    },
    {
      casa: 'Marvel Comics',
      data: [
        'Antman',
        'Thor',
        'Spiderman',
        'Antman',
        'Antman',
        'Thor',
        'Spiderman',
        'Antman',
        'Antman',
        'Thor',
        'Spiderman',
        'Antman',
        'Antman',
        'Thor',
        'Spiderman',
        'Antman',
        'Antman',
        'Thor',
        'Spiderman',
        'Antman',
      ],
    },
    {
      casa: 'Anime',
      data: [
        'Kenshin',
        'Goku',
        'Saitama',
        'Kenshin',
        'Goku',
        'Saitama',
        'Kenshin',
        'Goku',
        'Saitama',
        'Kenshin',
        'Goku',
        'Saitama',
        'Kenshin',
        'Goku',
        'Saitama',
        'Kenshin',
        'Goku',
        'Saitama',
        'Kenshin',
        'Goku',
        'Saitama',
        'Kenshin',
        'Goku',
        'Saitama',
      ],
    },
  ];
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      {/* <HeaderTitle title="Section List" /> */}
      <SectionList
        sections={casas}
        // ItemSeparatorComponent={() => <ItemSeparator />}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <HeaderTitle title={'Total de casas: ' + casas.length} />
        )}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: colors.background}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTitle title={'Total: ' + section.data.length} />
        )}
        // SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CustomSectionList;
