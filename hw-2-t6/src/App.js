import React from "react";
import "./App.css";
import { Card, Elevation } from "@blueprintjs/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Подкормка",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const data = [
      {
        title: "Полив",
        descr:
          `Эти растения очень нуждаются во влаге, но застаивание воды в горшке грозит загниванием корней, поэтому при посадке необходимо организовать дренажный слой,
           проверить водопроницаемость грунта. Полив производят только отстоянной водой комнатной температуры (то есть, вода должна быть приблизительно такой же температуры,
          что и воздух). Частота полива зависит от сезона, состояния и температуры воздуха. Летом возможен полив через день, иногда даже ежедневно, а зимой 
          ограничиваются поливом каждые 3–4 недели, важно не допускать пересыхания земли. А вот летом стоит поливать, когда земля в горшке просохнет на одну
          треть всего объема. Хорошо растить цитрусовые в глиняных горшках – они не только пропускают воздух, но еще регулируют влажность: впитывают избыточную 
          воду и при необходимости отдают ее снова. Цитрусовые хорошо отзываются на опрыскивания, благодаря которым листья получают необходимую влагу из воздуха,
          а не испаряют ее. Летом в жаркую погоду опрыскивания чистой отстоянной водой комнатной температуры проводят ежедневно. А на горячую батарею центрального
          отопления можно положить мокрое полотенце, чтобы увеличить влажность воздуха.`,
      },
      {
        title: "Обрезка",
        descr:
          `Формировать крону деревца нужно, когда оно вырастет на 25 – 30 см, обычно это происходит за первый год жизни. Верхнюю почку прищипывают, чтобы 
          стимулировать рост боковых, тем самым ограничивают длину основного побега, который станет стволом. Потом выбирают несколько основных скелетных веточек,
           а остальные боковые удаляют. Скелетные ветки укорачивают на треть для того, чтобы они обрастали новыми веточками. В дальнейшем ветки с плодами ежегодно
          укорачивают после уборки урожая. Основная обрезка цитрусовых происходит в феврале, когда деревце еще не вышло из периода покоя и не начало активный рост,
          но летом можно прищипывать побеги, стимулируя развитие мелких веточек. Обрезают веточки, как обычно, у всех плодовых деревьев и кустов, над почкой, 
          растущей в сторону от середины кроны. Пользоваться надо чистым острым секатором, стараясь причинить наименьший вред растению. Специалисты рекомендуют 
          не допускать плодоношения, пока не будет полностью сформирована крона. После этого взрослое растение нуждается в регулярном удалении поломанных или 
          больных веток, тех побегов, что растут внутрь кроны или просто ее слишком загущают, в укорачивании побегов, что разрастаясь, нарушают форму кроны.`,
      },
      {
        title: "Подкормка",
        descr:
          `Выращенное в горшке на окошке деревце больше садовых растений нуждается в регулярных подкормках. Их проводят только в период активной вегетации, первую 
          подкормку можно произвести в конце февраля или начале марта, последующие проводят через каждые 2–3 недели, частоту подскажет состояние растения и скорость
           его роста. Первые несколько раз вносят азотные удобрения, которые необходимы при активном росте зелени, далее деревце больше нуждается в фосфоре, калии и
          других элементах. Основное правило удобрений – лучше недокормить, чем перекормить. Недостаток полезных веществ исправить гораздо легче, чем их переизбыток,
          который может повлечь за собой ожог корней. О недостатке того или иного элемента скажет внешний вид растения. О недостатке азота свидетельствует отсутствие
          насыщенного зеленого цвета листьев, недостаток калия скажется на искривленной форме плодов и их преждевременном опадании, недостаток фосфора не дает
          вызревать плодам и молодой древесине побегов. Железо, магний, марганец, кальций – все эти элементы нужны растениям, их недостаток может вызвать изменение
          цвета или скручивание листьев. Кстати, при поливе жесткой водой не нужны отдельные подкормки с кальцием и железом. Подкормки производят путем
          опрыскиваний (внекорневые) и поливов (корневые) специальными растворами. Поливать раствором удобрений можно только влажную землю, после основного
          полива. Из органических удобрений лучше всего подойдет настой навозной жижи, настоянный несколько дней, слитый без осадка и разведенный десятикратно.
          Более насыщенный раствор может обжечь корни. Из минеральных удобрений используют суперфосфат, калийную и аммиачную селитру. Обычно люди, у которых
          нет дачи или приусадебного хозяйства пользуются только минеральными удобрениями, купленными в магазине. Их нужно приготовить, как описано в инструкции,
         а потом еще развести водой в несколько раз перед употреблением.`,
      },
    ];

    const dropDown = ({ title }) => {
      return <option value={title}> {title} </option>;
    };

    const newsCard = ({ title, descr }) => {
      return (
        <div className="card">
          <Card interactive={true} elevation={Elevation.TWO}>
            <h3> {title} </h3> <div className="descr"> {descr} </div>
          </Card>
        </div>
      );
    };

    return (
      <div className="App">
        <header className="header" tabIndex="-2">
          <img
            src="https://avatars.mds.yandex.net/get-zen_doc/108057/pub_5bdc637248efa800a9d30f3f_5be03bb30d30c900aba88467/scale_1200"
            className="header-img"
            alt="citrus"
            tabIndex="-5"
          />
        </header>
        <label>
          Выберите статью:{" "}
          <select value={this.state.value} onChange={this.handleChange}>
            {data.map((props) => dropDown(props))}
          </select>
        </label>
        <content className="content">
          {newsCard(data.find(props => props.title===this.state.value))}
        </content>
      </div>
    );
  }
}

export default App;
