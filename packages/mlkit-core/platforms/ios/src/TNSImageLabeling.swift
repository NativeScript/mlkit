import Foundation
#if canImport(MLKitImageLabeling)
import MLKitImageLabeling


struct TNSImageLabelingResult: Codable {
    var text: String?
    var confidence: Double?
    var index: Int?
}

class TNSImageLabeling: NSObject {
    static func createImageLabeling(_ labeling: [ImageLabel]) -> [TNSImageLabelingResult]{
        var result:[TNSImageLabelingResult] = []
        for label in labeling {
            result.append(TNSImageLabelingResult(text: label.text, confidence: Double(label.confidence), index: label.index))
        }
        return result
    }
}
#endif
