class InstructorsPage {
    get instructorItems() { return $$('//*[@class="instructor-item"]'); }

    async getInstructorCount() {
        const instructors = await this.instructorItems;
        return instructors.length;
    }

    async hasInstructors() {
        const count = await this.getInstructorCount();
        return count > 0;
    }
}

module.exports = new InstructorsPage(); 