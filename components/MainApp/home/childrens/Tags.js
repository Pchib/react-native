import React, {PureComponent} from 'react'
import {ScrollView, TouchableOpacity} from 'react-native'
import {Colors} from "../../../utils/Const";
import {Badge} from 'react-native-paper'

export default class Tags extends PureComponent {
    state = {
        tags: [
            {
                title: 'Camping',
                isSelected: false,
            },
            {
                title: 'Travel',
                isSelected: false,
            },
            {
                title: 'Tunis',
                isSelected: false,
            },
            {
                title: 'Djerba',
                isSelected: false,
            },
            {
                title: 'Hotels',
                isSelected: false,
            }, {
                title: 'FootBall',
                isSelected: false,
            }, {
                title: 'Nature',
                isSelected: false,
            }, {
                title: 'Getoutside',
                isSelected: false,
            }, {
                title: 'Survival',
                isSelected: false,
            }],
    }

    handleChange = index => {
        let {tags} = this.state;
        tags[index].isSelected = !tags[index].isSelected
        this.setState({tags: tags},() => this.forceUpdate())
    };
    _renderTag = (tag, index) => {
        let margin = index === 0 ? 4 : 8
        let color = tag.isSelected ? Colors.red : Colors.lightGray

        return (
            <TouchableOpacity key={index} style={{marginLeft: margin}} onPress={() => this.handleChange(index)}>
                <Badge size={24}
                       style={{
                           paddingHorizontal: 10,
                           backgroundColor: color
                       }}>{tag.isSelected ? `#${tag.title}` : `${tag.title}`}</Badge>
            </TouchableOpacity>
        )
    }

    render() {
        let tags = this.state.tags.sort((a, b) => b.isSelected - a.isSelected)
        return (
            <ScrollView horizontal
                        scrollEnabled
                        decelerationRate={0}
                        scrollEventThrottle={16}
                        showsHorizontalScrollIndicator={false}
                        style={{marginVertical: 2}}
            >{tags.map((tag, index) => this._renderTag(tag, index))}
            </ScrollView>
        )
    }
}
