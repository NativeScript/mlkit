import Foundation
#if canImport(MLKitObjectDetection)
import MLKitObjectDetection


struct TNSObjectLabeling: Codable {
    var text: String?
    var confidence: Double?
    var index: Int?
}


struct TNSObjectDetectionResult: Codable {
    var trackingId: Int?
    var bounds: TNSBounds
    var labels: [TNSObjectLabeling]
}

class TNSObjectDetection: NSObject {
    
    static func createObjectLabeling(_ labeling: [ObjectLabel]) -> [TNSObjectLabeling]{
        var result:[TNSObjectLabeling] = []
        for label in labeling {
            result.append(TNSObjectLabeling(text: label.text, confidence: Double(label.confidence), index: label.index))
        }
        return result
    }
    
    static func createObjectDetection(_ objects: [Object]) -> [TNSObjectDetectionResult]{
        var result:[TNSObjectDetectionResult] = []
        for object in objects {
            result.append(TNSObjectDetectionResult(trackingId: object.trackingID?.intValue, bounds: createBounds(object.frame), labels: createObjectLabeling(object.labels)))
        }
        return result
    }
}
#endif
