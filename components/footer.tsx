"use client";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <p className="text-sm text-gray-500">
                        © {currentYear} David Chan Weizhi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;