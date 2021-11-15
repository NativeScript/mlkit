import Foundation
#if canImport(MLKitTextRecognition)
import MLKitTextRecognition


struct TNSTextElement: Codable {
    var text: String?
    var bounds: TNSBounds
}

struct TNSTextLine: Codable {
    var text: String?
    var bounds: TNSBounds
    var elements: [TNSTextElement]
    var points: [TNSPoint]?
}


struct TNSTextRecognizerResult: Codable {
    var text: String?
    var bounds: TNSBounds
    var lines: [TNSTextLine]
    var points: [TNSPoint]
}

class TNSTextRecognizer: NSObject {
    static func createTextRecognizer(_ text: Text) -> [TNSTextRecognizerResult] {
        var blocks: [TNSTextRecognizerResult] = []
        for block in text.blocks {
            var lines: [TNSTextLine] = []
            for line in block.lines {
                var elements: [TNSTextElement] = []
                for element in line.elements {
                    elements.append(
                        TNSTextElement(text: element.text, bounds: createBounds(element.frame))
                    )
                }
                
                let points = createPoints(line.cornerPoints)
                
                
                lines.append(
                    TNSTextLine(text: line.text, bounds: createBounds(line.frame), elements: elements, points: points)
                )
                
            }
            
            blocks.append(
                TNSTextRecognizerResult(text: block.text, bounds: createBounds(block.frame), lines: lines, points: createPoints(block.cornerPoints)!)
            )
            
        }
        return blocks
    }
}
#endif
