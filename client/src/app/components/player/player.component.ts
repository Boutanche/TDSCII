import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Track } from 'ngx-audio-player';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PlayerComponent implements OnInit {

DisplayTitle = true;
DisplayPlayList = true;
PageSizeOptions = [2,4,6];
DisplayVolumeControls = true;
DisplayArtist = false;
DisplayDuration = false;
DisablePositionSlider = true;

constructor() { }

  ngOnInit(): void {
  }

  msaapPlaylist: Track[] = [
    {
      title: 'Audio One Title',
      link: 'Link to Audio One URL',
      artist: 'Audio One Artist',

    },
    {
      title: 'Audio Two Title',
      link: 'Link to Audio Two URL',
      artist: 'Audio Two Artist',

    },
    {
      title: 'Audio Three Title',
      link: 'Link to Audio Three URL',
      artist: 'Audio Three Artist',

    },
  ];
  onEnded(){

  }

}
