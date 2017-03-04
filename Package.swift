import PackageDescription

let package = Package(
    name: "swiftringify-cli",
    dependencies: [
        .Package(url: "https://github.com/swift-script/swiftringify", "0.0.1"),
    ]
)

