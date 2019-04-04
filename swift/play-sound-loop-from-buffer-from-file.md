音ファイルからバッファに読み込んでループ再生させる  
scheduleFileのコールバックでループさせると隙間が空いたので
``` 
let audioEngine: AVAudioEngine = AVAudioEngine()
let audioFilePlayer: AVAudioPlayerNode = AVAudioPlayerNode()
func setupSe(){
    let filePath: String = Bundle.main.path(forResource: "engine", ofType:"wav")!
    let fileURL: URL = URL(fileURLWithPath: filePath)
    let audioFile = try! AVAudioFile(forReading: fileURL)
    let audioFormat = audioFile.processingFormat
    let audioFrameCount = UInt32(audioFile.length)
    let audioFileBuffer = AVAudioPCMBuffer(pcmFormat: audioFormat, frameCapacity: audioFrameCount)
    try! audioFile.read(into: audioFileBuffer!)

    let mainMixer = audioEngine.mainMixerNode
    audioEngine.attach(audioFilePlayer)
    audioEngine.connect(audioFilePlayer, to:mainMixer, format: audioFileBuffer?.format)
    try! audioEngine.start()

    audioFilePlayer.play()
    audioFilePlayer.scheduleBuffer(audioFileBuffer!, at: nil, options:.loops, completionHandler: nil)
}
```
