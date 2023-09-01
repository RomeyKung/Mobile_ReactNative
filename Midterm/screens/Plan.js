import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";


export default function Plan({route,navigation}) {
    const course = [
        {
          src: require("../pics/1.jpg"),
          title: "IT",
          name: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ",
          time: "130  หน่วยกิต",
          content:
            "คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง มีแนวคิดในการผลิต บัณฑิตที่มีความรู้ความสามารถด้านเทคโนโลยีสารสนเทศ มีความรับผิดชอบต่อสังคมในการประกอบวิชาชีพด้านเทคโนโลยีสารสนเทศ และสามารถสื่อสารตลอดจนทำงานร่วมกับผู้อื่นในองค์กรได้อย่างมีประสิทธิภาพ โดยหลักสูตรออกแบบมาเพื่อผลิตบัณฑิตที่มีความรู้และทักษะทั้งใน มิติเชิงกว้างและเชิงลึก (T-shaped Skills) กล่าวคือ ความรู้เชิงกว้างด้านพื้นฐานเทคโนโลยีสารสนเทศและระบบธุรกิจ  พร้อมไปกับการมีทักษะความเชี่ยวชาญเฉพาะทางตามแขนงวิชาที่เลือกเรียน อันได้แก่ ด้านการพัฒนาซอฟต์แวร์ ด้านการออกแบบและบริหารระบบเครือข่าย และด้านการพัฒนาสื่อประสมและเกม",
          firstyear: {
            1: [
              "06016301 	Information Technology Fundamentals",
              "06016314	Problem Solving in Information Technology",
              "06016319	Introduction to Computer Systems",
              "90101007	Introduction to Mathematical Economics",
              "90201001	Foundation English 1",
              "90401013	General Business",
            ],
            2: [
              "06016302	Mathematics for Information Technology",
              "06016311	Multimedia Technology",
              "06016315	Computer Programming",
              "06016320	Computer Systems Organization and Operating System",
              "90201002	Foundation English 2",
              "90201012	Development of Reading and Writing Skill in English",
            ],
          },
          secondyear: {
            1: [
              " 06016303	Discrete Mathematics",
              "06016305	Management Information Systems",
              "06016312	Web Technology",
              "06016313	Introduction to Computer Networks",
              "06016316	Data Structures and Algorithms",
              "06016317	Object-Oriented Programming",
            ],
          },
        },
        {
          src: require("../pics/2.jpg"),
          title: "DSBA",
          name: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการข้อมูลและการวิเคราะห์เชิงธุรกิจ",
          time: "126  หน่วยกิต",
          content:
            "คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง ได้ตระหนักถึงความสำคัญและความจำเป็นที่จะต้องจัดเตรียมบุคลากรที่มีความรู้ทางด้านวิทยาการข้อมูลและการวิเคราะห์เชิงธุรกิจ เพื่อรองรับความต้องการของตลาดแรงงาน รวมทั้งรองรับการเปลี่ยนแปลงของเทคโนโลยีที่ได้รับการพัฒนาอย่างรวดเร็ว จึงได้จัดทำหลักสูตรวิทยาศาสตรบัณฑิต สาขาวิทยาการข้อมูลและการวิเคราะห์เชิงธุรกิจขึ้น เพื่อผลิตบัณฑิตที่มีความรู้ความสามารถทั้งในภาคทฤษฎีและปฏิบัติ มีทักษะความชำนาญทั้งในระดับพื้นฐานและในระดับสูง รวมทั้งมีวันัย ซื่อสัตย์สุจริต มีคุณธรรมจริยธรรม และมีความพร้อมในการทำงาน เพื่อสามารถตอบสนองความต้องการขององค์กรและหน่วยงานต่าง ๆ ทั้งภาครัฐและเอกชนดังกล่าวได้ในอนาคต",
          firstyear: {
            1: [
              ",06026100	Information Technology Fundamentals",
              ",06026104	Computer  Programming",
              ",90101007	Introduction to Mathematical Economics",
              ",90201001	Foundation English 1",
             ", 90401013	General Business",
              ",90101xxx	Elective Course in Scientific and Mathematics 2",
            ],
            2: [
              '06026101	Mathematics for Information Technology',
              ",06026105	Introduction to Computer Networks",
              ",06026106	Database  System  Concepts",
              ",06026107	Data Structures and Algorithms",
              ",90201002	Foundation English 2",
              ",90401012	Introduction to Marketing",
            ],
          },
          secondyear: {
            1: [
              ",06026102	Discrete Mathematics",
              ",06026103	Probability and Statistics",
              ",06026108	Management Information Systems",
              ",06026109	Web Technology",
              ",06026110	Financial Accounting",
             ", 06026111	Practical  NoSQL Database",
              ",90201012	Development of Reading and Writing Skills in English",
            ],
          },
        },
        {
          src: require("../pics/3.jpg"),
          title: "BIT",
          name: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศทางธุรกิจ (หลักสูตรนานาชาติ)",
          time: "126  หน่วยกิต",
          content:
            "หลักสูตร วิทยาศาสตรบัณฑิต สาขา เทคโนโลยีสารสนเทศทางธุรกิจ (หลักสูตรนานาชาติ) เป็นหลักสูตรที่ให้การศึกษาทางด้านเทคโนโลยีสารสนเทศทางธุรกิจ หลักสูตรมุ่งมั่นในการผลิตบัณฑิตมีความรู้ ความเชี่ยวชาญ และทักษะพร้อมในการทำงานด้านเทคโนโลยีสารสนเทศทางธุรกิจระดับสากล เพื่อเป็นแรงขับเคลื่อนที่สำคัญในการพัฒนาประเทศ",
          firstyear: {
            1: [
              "06036001	Information Technology Fundamentals",
              "06036021	Problem Solving in Information Technology",
              "06036027	Computer Systems Organization and Operating System",
              "06036085	Introduction to Mathematical Economics",
              "06036081	Foundation English 1",
              "06036083	Development of Reading and Writing Skill in English",
            ],
            2: [
              "06036002	Mathematics for Information Technology",
              "06036004	Management and  Organization",
             " 06036022	Computer Programming",
              "06036090	General Business",
              "06036082	Foundation English 2",
              "06036084	English for Professional Presentation",
            ],
          },
          secondyear: {
            1: [
              "06036003	Probability and Statistics",
                  "06036005	Financial Accounting",
                  "06036023	Basic Data Structure and Algorithms",
                  "06036028	Introduction to Computer Networks",
                  "06036087	Report Writing",
                  "06036089	Entrepreneurship",
            ],
          },
        },
        {
          src: require("../pics/4.jpg"),
          title: "AIT",
          name: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีปัญญาประดิษฐ์",
          time: "120  หน่วยกิต",
          content:
            "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีปัญญาประดิษฐ์ เป็นหลักสูตรที่พัฒนาขึ้นบนแนวคิดปรัชญา มุ่งสร้างองค์ความรู้  ผลิต และ พัฒนา ทรัพยากรบุคคลของชาติ เพื่อเพิ่มขีดความสามารถในการแข่งขันของประเทศ และเพื่อสนับสนุนการพัฒนาบนฐานข้อมูลความรู้ เทคโนโลยี วิจัย และ นวัตกรรม ด้านวิทยาศาสตร์และเทคโนโลยีอันเป็นรากฐานที่ดีของการพัฒนาประเทศ จุดเด่นของหลักสูตร คือ การออกแบบที่มุ่งเน้นการวางรากฐานคณิตศาสตร์ที่แข็งแรง การวางรากฐานองค์ความรู้ด้านปัญญาประดิษฐ์สมัยใหม่ ได้แก่ การเรียนรู้ของเครื่องและการเรียนรู้เชิงลึก และการสร้างความร่วมมือกับภาคธุรกิจอุตสาหกรรมเพื่อให้ผู้เรียน ได้ทำงานกับโจทย์จริงตั้งแต่ปีการศึกษาที่สาม",
          firstyear: {
            1: [
              "06046400	Calculus1",
                  "06046402	Linear Algebra",
                  "06066000	Discrete Mathematics",
                  "06066001	Probability and Statistics",
                  "06066303	Problem Solving and Computer Programming",
                  "90641008	Introduction to English Communication Skills",
            ],
            2: [
              "06046401	Calculus2",
                  "06046403	Computer Programming",
                  "06066301	Data Structures and Algorithms",
                  "06046404	Fundamental of Embedded System",
                  "90641007	Digital Citizen",
                  "90641004	Team-Project 1",
                  "9064xxxx	General Education Courses",
            ],
          },
          secondyear: {
            1: [
              "06066300	Database System Concepts",
              "06046405	Probabilistic Machine Learning",
              "06046406	Fundamentals of Deep Learning",
              "06046409	Introduction to Computer Vision",
              "06046413	Artificial Intelligence and Internet Of Thing",
              "90641009	Intercultural Communication Skills in English 1",
            ],
          },
        },
      ];
      console.log(route.params.first)
    // const first = route.params.first;
    // const second = route.params.second;

    const [enteredValue, setEnteredValue] = useState("");
    const [enteredValue2, setEnteredValue2] = useState("");
    function search(enteredValue, enteredValue2){

    }
  return (
    <View>
      <View style={styles.input}>
        <View style={styles.wrap}>
          <TextInput
  
            blurOnSubmit
            keyboardType="number-pad"
            maxLength={1}
              onChangeText={newVal => setEnteredValue(newVal)}
            value={enteredValue}
            placeholder="กรอกชั้นปี"
          />
          <TextInput
         
            blurOnSubmit
            keyboardType="number-pad"
            maxLength={1}
              onChangeText={newVal => setEnteredValue2(newVal)}
            //   value={enteredValue}
            placeholder="กรอกภาคเรียน"
          />
          <Button title="ค้นหา" />
          <View style={{ height:500 }}>
          <Text>No information</Text>
        </View>
        </View>
       
      <Button title="กลับไปที่หน้าหลักสูตรรวม" onPress={()=>navigation.navigate("ProgramScreen")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  imgs: {
    width: 120,
    height: 120,
  },
  buttons: {
    // backgroundColor: "red",
    justifyContent: "flex-end",
    rowGap: 20,
    margin: 20,
  },
  input: {
    flexDirection: "row",
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
