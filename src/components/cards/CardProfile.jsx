import React from "react";
import styles from "./CardProfile.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import alleyway from "../../assets/music/PeriTune_Alleyway.mp3";
import villageFete from "../../assets/music/PeriTune_Village_Fete.mp3";
import moonBeam from "../../assets/music/Waterflame_Moonbeam.mp3";
import velocityCity from "../../assets/music/Waterflame_Velocity_Wings.mp3";

class CardProfile extends React.Component {

    state = {
      index: 0,
      currentTime: '0:00',
      musicList: [
        {name:'Velcity City', author: 'Waterflame', audio:velocityCity, duration: '4.34', link: "https://www.youtube.com/channel/UCVuv5iaVR55QXIc_BHQLakA"},
        {name:'Moonbeam', author: 'Waterflame', audio:moonBeam, duration: '4.44', link: "https://www.youtube.com/channel/UCVuv5iaVR55QXIc_BHQLakA"},
        {name:'Alleyway', author: 'Peritune', audio: alleyway, duration: '3.45', link: "https://peritune.com/"}, 
        {name:'Village Fete', author: 'Peritune',  audio:villageFete, duration: '2.33', link: "https://peritune.com/"},
        ],
      pause: false,
    };
  

   componentDidMount() {
     this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);
     this.playerRef.addEventListener("ended", this.nextSong, false);
     this.timelineRef.addEventListener("click", this.changeCurrentTime, false);
     this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);
     this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);
   }
  
    componentWillUnmount() {
      this.playerRef.removeEventListener("timeupdate", this.timeUpdate);
      this.playerRef.removeEventListener("ended", this.nextSong);
      this.timelineRef.removeEventListener("click", this.changeCurrentTime);
      this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);
      this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);
    }
  
 
  changeCurrentTime = (e) => {
    const duration = this.playerRef.duration;
    
    const playheadWidth = this.timelineRef.offsetWidth;
    const offsetWidht = this.timelineRef.offsetLeft;
    const userClickWidht = e.clientX - offsetWidht;
   
    const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;
  
    this.playheadRef.style.width = userClickWidhtInPercent + "%";
    this.playerRef.currentTime = (duration * userClickWidhtInPercent)/100;
  }
  
  hoverTimeLine = (e) => {
    const duration = this.playerRef.duration;
    
    const playheadWidth = this.timelineRef.offsetWidth
    
    const offsetWidht = this.timelineRef.offsetLeft;
    const userClickWidht = e.clientX - offsetWidht;
    const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;
  
    if(userClickWidhtInPercent <= 100){
      this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
    }
    
    const time = (duration * userClickWidhtInPercent)/100;
    
    if( (time >=0) && (time <= duration)){
      this.hoverPlayheadRef.dataset.content = this.formatTime(time);
    }
  }
  
  resetTimeLine = () => {
    this.hoverPlayheadRef.style.width = 0;
  }
  
  timeUpdate = () => {
    const duration = this.playerRef.duration;
    const timelineWidth = this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
    const playPercent = 100 * (this.playerRef.currentTime / duration);
      this.playheadRef.style.width = playPercent + "%";
    const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));  
    this.setState({ 
      currentTime 
    });
  }
  
  formatTime = (currentTime) =>{
    const minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);
  
    seconds = (seconds >= 10) ? seconds : "0" + seconds % 60;
    
    const formatTime = minutes + ":" +  seconds
   
    return formatTime;
    }
  
    updatePlayer = () =>{
      const { musicList, index } = this.state;
      const currentSong = musicList[index];
      const audio = new Audio(currentSong.audio);
      this.playerRef.load();
    }
    
    nextSong = () => {
      const { musicList, index, pause } = this.state;
    
      this.setState({ 
        index: (index + 1) % musicList.length
      });
      this.updatePlayer();
      if(pause){
        this.playerRef.play();
      }
    };
  
    prevSong = () => {
      const { musicList, index, pause } = this.state;  
      
      this.setState({ 
        index: (index + musicList.length - 1) % musicList.length
      });
      this.updatePlayer();
      if(pause){
        this.playerRef.play();
      }
    };
     

    playOrPause = () =>{
      const { musicList, index, pause } = this.state;
      const currentSong = musicList[index];
      const audio = new Audio(currentSong.audio);
      if( !this.state.pause ){
        this.playerRef.play();
      }else{
        this.playerRef.pause();
      }
      this.setState({
        pause: !pause
      })
    }
    
    clickAudio = (key) =>{
      const { pause } = this.state;
      
      this.setState({
        index: key
      });
      
      this.updatePlayer();
      if(pause){
        this.playerRef.play();
      }
    }
  
    
    render() {
      const { musicList, index, currentTime, pause } = this.state;
      const currentSong = musicList[index];
      const cx = classNames.bind(styles);
      return (
        <div className={cx("card")}>
          <div className={cx("current-song")}>
          <audio autoplay loop ref={ref => this.playerRef = ref} >
              <source src={ currentSong.audio } type="audio/mp3"/>
                Your browser does not support the audio element.
            </audio>
            <audio autoplay loop ref={ref => this.playerRef = ref} >
              <source src={ currentSong.audio } type="audio/mp3"/>
                Your browser does not support the audio element.
            </audio>

            <span className={cx("song-name")}>{ currentSong.name }</span>
            <a href={currentSong.link}className={cx("song-autor")}>By: { currentSong.author }</a>
            
            <div className={cx("time")}>
              <div className={cx("current-time")}>{ currentTime }</div>
              <div className={cx("end-time")}>{ currentSong.duration }</div>
            </div>
            
            <div ref={ref => this.timelineRef = ref} id="timeline">
              <div ref={ref => this.playheadRef = ref} id="playhead"></div>
              <div ref={ref => this.hoverPlayheadRef = ref} class="hover-playhead" data-content="0:00"></div>
            </div>
            
            <div className={cx("controls")}>
              <button onClick={this.prevSong} className={cx("prev prev-next current-btn")}><FontAwesomeIcon icon={faBackward} /></button>
              
              <button onClick={this.playOrPause} className={cx("play current-btn")}>
                {
                  (!pause) ? <FontAwesomeIcon icon={faPlay} />
                  :<FontAwesomeIcon icon={faPause} />
                }
              </button>
              <button onClick={this.nextSong} className="next prev-next current-btn"><FontAwesomeIcon icon={faForward} /></button>
            </div>
            
          </div>
          <div className={cx("play-list")} >
            {musicList.map( (music, key=0) =>
                           <div key={key} 
                             onClick={()=>this.clickAudio(key)}
                             className={cx("track " + 
                               (index === key && !pause ?'current-audio':'') + 
                               (index === key && pause ?'play-now':''))} >
                             
                         
                             <div className={cx("track-discr")} >
                               <span className={cx("track-name")} >{music.name}</span>
                               <a href={music.link} className={cx("track-author")} >By: {music.author}</a>
                             </div>
                             <span className={cx("track-duration")} >
                               {(index === key)
                                 ?currentTime
                                 :music.duration
                               }
                             </span>
                           </div>
                          )}
          </div>
        </div>
      )
    }
  }
  
  export default CardProfile;