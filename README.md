# Bus: Generates marathon pacer time map
## Sample Input
```
---- Inputs ----
Distance: 42 km
Cutoff: 4:45:0 hrs
Buffer time: 0:03:0 hrs
Water Stop after every: 3 km
Water Stop duration: 10 secs
Fixed paces for 1st 3 km [ '0:7:15', '0:7:00', '0:6:45' ]
```
## Sample Output
```
=> Pacer map with marathon pace of 0:6:37 mins/km

time, desc
00:00:00 => 0:7:15 mins/km pace for km 1
00:07:15 => 0:7:00 mins/km pace for km 2
00:14:15 => 0:6:45 mins/km pace for km 3
00:21:00 => 10 secs waterStop
00:21:10 => 0:6:37 mins/km pace for km 4
00:27:47 => 0:6:37 mins/km pace for km 5
00:34:24 => 0:6:37 mins/km pace for km 6
00:41:01 => 10 secs waterStop
00:41:11 => 0:6:37 mins/km pace for km 7
00:47:48 => 0:6:37 mins/km pace for km 8
00:54:25 => 0:6:37 mins/km pace for km 9
01:01:02 => 10 secs waterStop
01:01:12 => 0:6:37 mins/km pace for km 10
01:07:49 => 0:6:37 mins/km pace for km 11
01:14:26 => 0:6:37 mins/km pace for km 12
01:21:03 => 10 secs waterStop
01:21:13 => 0:6:37 mins/km pace for km 13
01:27:50 => 0:6:37 mins/km pace for km 14
01:34:27 => 0:6:37 mins/km pace for km 15
01:41:04 => 10 secs waterStop
01:41:14 => 0:6:37 mins/km pace for km 16
01:47:51 => 0:6:37 mins/km pace for km 17
01:54:28 => 0:6:37 mins/km pace for km 18
02:01:05 => 10 secs waterStop
02:01:15 => 0:6:37 mins/km pace for km 19
02:07:52 => 0:6:37 mins/km pace for km 20
02:14:29 => 0:6:37 mins/km pace for km 21
02:21:06 => 10 secs waterStop
02:21:16 => 0:6:37 mins/km pace for km 22
02:27:53 => 0:6:37 mins/km pace for km 23
02:34:30 => 0:6:37 mins/km pace for km 24
02:41:07 => 10 secs waterStop
02:41:17 => 0:6:37 mins/km pace for km 25
02:47:54 => 0:6:37 mins/km pace for km 26
02:54:31 => 0:6:37 mins/km pace for km 27
03:01:08 => 10 secs waterStop
03:01:18 => 0:6:37 mins/km pace for km 28
03:07:55 => 0:6:37 mins/km pace for km 29
03:14:32 => 0:6:37 mins/km pace for km 30
03:21:09 => 10 secs waterStop
03:21:19 => 0:6:37 mins/km pace for km 31
03:27:56 => 0:6:37 mins/km pace for km 32
03:34:33 => 0:6:37 mins/km pace for km 33
03:41:10 => 10 secs waterStop
03:41:20 => 0:6:37 mins/km pace for km 34
03:47:57 => 0:6:37 mins/km pace for km 35
03:54:34 => 0:6:37 mins/km pace for km 36
04:01:11 => 10 secs waterStop
04:01:21 => 0:6:37 mins/km pace for km 37
04:07:58 => 0:6:37 mins/km pace for km 38
04:14:35 => 0:6:37 mins/km pace for km 39
04:21:12 => 10 secs waterStop
04:21:22 => 0:6:37 mins/km pace for km 40
04:27:59 => 0:6:37 mins/km pace for km 41
04:34:36 => 0:6:37 mins/km pace for km 42
04:41:13 => Finish Line
```
# License
```
/*
 * Copyright (C) 2018 Yogesh Powar yogesh.powar@gmail.com
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.This program is distributed in the hope
 * that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see https://www.gnu.org/licenses/.
 */
 ```
